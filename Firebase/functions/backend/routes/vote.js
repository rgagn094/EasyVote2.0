const router = require('express').Router();
const Vote = require('../models/vote');
const User = require('../models/user');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const geoip = require('geo-from-ip');
var path = require('path');

function calculateAge(birthDate){
  var diff = Date.now() - birthDate.getTime();
  var age = new Date(diff);
  return Math.abs(age.getUTCFullYear() - 1970);
}

/*
Create a vote
*/

router.post('/cast/:electionID/:userID', function(req,res){
  console.log("Received request to cast a vote");

  //Get user document that cast vote to obtain its information
  User.findById(req.params.userID, function(err, user){
    if(err){
      console.log(err);
      res.status(500).send();
    }
    else if(!user){
      console.log("User ID not found");
      res.status(404).send()
    }
    else{
      //Check voter's age
      let age = calculateAge(user.demographics.birthDate);
      if(age < 18){
        res.status(403).json({error: "Unfortunately you have not reached the required voting age"});
        return;
      }

      //Check if user has already voted
      var key = user.id.toString() + user.id.toString();
      var data = user.id.toString() + req.params.electionID.toString();
      var keystring = key.toString('hex').slice(0, 32);
      const cipher = crypto.createCipheriv('aes-256-cbc', keystring, "EasyVoteEasyVote");

      let encrypted = cipher.update(data, 'utf8', 'hex');
      encrypted += cipher.final('hex');

      Vote.findOne({hashedID: encrypted}, function(err, data){
        if(err){
          console.log(err);
          res.status(500).send();
        }else if(data){
          res.status(403).json({error: "Unfortunately you have already voted in this election"});
        }else{
          //Create new vote
          let newVote = new Vote();
          let ip = req.headers['fastly-client-ip'] ||
             req.connection.remoteAddress ||
             req.socket.remoteAddress ||
             (req.connection.socket ? req.connection.socket.remoteAddress : null);
          let ipInfo = geoip.allData(ip);

          newVote.hashedID = encrypted;
          newVote.candidate = req.body.candidate.toLowerCase();
          newVote.geoLocation = ipInfo.location;
          newVote.demographics.country = ipInfo.country;
          newVote.demographics.continent = ipInfo.continent;
          newVote.locationCode = ipInfo.code;
          newVote.ipAddress = ip;
          newVote.electionID = req.params.electionID;
          newVote.demographics.city = ipInfo.city;
          newVote.demographics.state = ipInfo.state;
          newVote.demographics.age = age;
          newVote.demographics.gender =  user.demographics.gender;

          newVote.save(function(err, vote){
            if(err){
              console.log(err);
              res.status(500).send();
            }
            else{
              // Send email to user to authenticate vote

              nodemailer.createTestAccount((err, account) => {
                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: "easyvoteapp@gmail.com", // generated ethereal user
                        pass: "easyvote1" // generated ethereal password
                    }
                });

                let mailOptions = {
                      from: '"EasyVote ✔" <foo@example.com>', // sender address
                      to: user.email, // list of receivers
                      subject: 'Vote Authentication', // Subject line
                      //text: 'Thank you for voting with EasyVote!\n', // plain text body
                      html: '<b>Thank you for using EasyVote!<br>'+
                      'Please click on the link below to authenticate your vote</b><br>'+
                      'https://easyvote-f20bf.firebaseapp.com/vote/authenticate/'+ newVote.hashedID// html body
                  };
                transporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                      console.log(error);
                  }
                  console.log('Message sent');

                });
              });
              console.log("Vote saved to database");
              res.status(200).json(newVote);
            }
          });

        }
      });
    }
  });
});

/*
Get all votes from a specific election
*/

router.get('/listElection/:electionID', function(req,res){
  console.log("Received request to list votes from an election");

  Vote.find({electionID: req.params.electionID}, function(err,foundData){
    if(err){
      console.log(err);
      res.status(500).send();
    }else if (!foundData) {
      console.log("No votes found");
      res.status(404).send();
    }else {
      res.status(200).json(foundData);
    }
  });
});

/*
Get all votes
*/

router.get('/listAll', function(req,res){
  console.log("Received request to list all votes");

  Vote.find({}, function(err, foundData){
    if(err){
      console.log(err);
      res.status(500).send();
    }else if (!foundData) {
      console.log("No Votes found");
      res.status(404).send();
    }else {
      res.status(200).json(foundData);
    }
  });
});

/*
Authenticate Vote
*/

router.get('/authenticate/:hashedID', function(req,res){
  console.log("Received vote authenticate request");

  Vote.updateOne({hashedID: req.params.hashedID}, {$set: {authenticated: true}}, function(err, vote){
    if(err){
      console.log(err);
      res.status(500);
      res.sendFile(path.join(__dirname + '../../..' +  '/assets/500.html'));
    }else if (!vote ){
      console.log("Vote not found");
      res.status(404);
      res.sendFile(path.join(__dirname + '../../..' + '/assets/404.html'));
    }else{
      console.log("Vote has been authenticated successfully");
      if (req.accepts('html')) {
        res.status(200);
        res.sendFile(path.join(__dirname + '../../..' + '/assets/authenticated.html'));
      }
    }
  });
});


module.exports = router;
