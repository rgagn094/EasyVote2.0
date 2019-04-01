//var express = require('express');
let router = require('express').Router();
const Election = require('../models/election');
const ElectionBody = require('../models/electionBody');
const ObjectID =require('mongoose').Types.ObjectId;
// const ObjectID =require('mongoose').Schema.Types.ObjectId;
//var election = express.Router();

/*
Create an election
*/

// router.post('/create', function(req,res){
//     console.log("Received Post new election request...");
//
//             var newElection = new Election();
//
//             newElection.title = req.body.title;
//             newElection.candidates = req.body.candidates;//List of candidates and their details
//             newElection.startDate = req.body.startDate;
//             newElection.endDate = req.body.endDate;
//             newElection.image = req.body.image;
//             newElection.meta = {description: req.body.description, electionBody: req.body.electionBody};
//
//
//             newElection.save(function (err, election) {
//                 if (err) {
//                     console.log(err);
//                     res.status(500).send();
//                 }
//                 res.status(200).send(election);
//                 console.log("Data saved to database");
//
//
//             });
//
// });

router.post('/create', function(req,res){
    console.log("Received Post new election request...");
    let electionBodyID = req.body.electionBodyID;
    ElectionBody.findById(electionBodyID, function(err, electionBody) {
        if (err) {
            console.log(err);
            res.status(500).send();
        }
        else if (!electionBody) {
            console.log("Election Body ID not found");
            res.status(404).send()
        }
        else {


            let newElection = new Election();

            newElection.title = req.body.title;
            newElection.candidates = req.body.candidates;//List of candidates and their details
            // Capitalize first letters of names
            for(i = 0; i < newElection.candidates.length; i++){
              let string1 = newElection.candidates[i].firstName;
              let string2 = newElection.candidates[i].lastName;
              string1 = string1.charAt(0).toUpperCase() + string1.slice(1);
              string2 = string2.charAt(0).toUpperCase() + string2.slice(1);
              newElection.candidates[i].firstName = string1;
              newElection.candidates[i].lastName = string2;
            }
            newElection.startDate = req.body.startDate;
            newElection.expiryDate = req.body.expiryDate;
            newElection.image = req.body.image;
            newElection.meta = {description: req.body.description, electionBodyID: req.body.electionBodyID};


            newElection.save(function (err, election) {
                if (err) {
                    console.log(err);
                    res.status(500).send();
                }
                    res.status(200).send(election);
                    console.log("Data saved to database");


            });
        }
    });
});


/*
Get an election
*/

router.get('/view/:electionId', function(req,res){
    console.log("Received get specific election");

    Election.findById(req.params.electionId, function(err,foundDoc){
        if(err){
            console.log(err);
            res.status(500).send();
        }
        else if(!foundDoc){
            console.log("No election found");
            res.status(404).end();
        }
        else{
            res.status(200).json(foundDoc);
        }
    });
});


/*
List election
*/

router.get('/list', function(req,res){

    console.log("Received get all elections request...");

    Election.find({}, function(err,foundData){
        if(err){
            console.log(err);
            res.status(500).send();
        }
        else if(!foundData){
            console.log("No elections found");
            res.status(404).send();
        }
        else{
            res.status(200).json(foundData);
        }
    });
});

/*
Edit election
*/

router.put('/edit/:electionId', function(req,res){
    console.log("Received edit request...");

    Election.findById(req.params.electionId, function(err,foundDoc){
        if(err){
            console.log(err);
            res.status(500).send();
        }
        else if(!foundDoc){
            console.log("Election not found");
            res.status(404).end();
        }
        else{
            if(req.body.title){
                foundDoc.title = req.body.title;
            }

            if(req.body.candidates){
                foundDoc.candidates = req.body.candidates;
            }
            if(req.body.startDate){
                foundDoc.startDate = req.body.startDate;
            }
            if(req.body.expiryDate){  //Must test when elections routing has been implemented
                foundDoc.expiryDate = req.body.expiryDate;
            }
            if(req.body.image){  //Must test when elections routing has been implemented
                foundDoc.image = req.body.image;
            }
            if(req.body.meta){  //Must test when elections routing has been implemented
                foundDoc.meta = {description:req.body.description, electionBody:req.body.electionBody};
            }

            foundDoc.save(function(err, updatedDoc){
                if(err){
                    console.log(err);
                    res.status(500).send()
                }
                else{
                    console.log("Data saved to database");
                    res.send(updatedDoc);
                }
            });
        }
    });
});


/*
*Get election by election body
* */

router.get('/list/:electionBodyID', (req,res)=>{
    let electionBodyID = ObjectID(req.params.electionBodyID)
    Election.find({"meta.electionBodyID": electionBodyID}).exec().then((elections)=>{
        res.send({elections})
    }).catch((err)=>{
        console.log(err);
        res.send({error: err})
    })
});

/*
delete election
*/



module.exports = router;

//module.exports = election;
