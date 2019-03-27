import React, { Component } from 'react';
//import {Header} from './Header';
import {HomeHeader2} from './index';
import {connect} from 'react-redux';
import {candidateInfo,sendVote} from '../actions';
import { AsyncStorage } from "react-native"
//import Myimage from '../.././images/p.png';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  Image,
  Platform
 
} from 'react-native';


class HomeView extends Component {

    state = {
        FirstName:  this.props.navigation.state.params.FirstName,
        Id:  this.props.navigation.state.params.Id
    } 


    componentDidMount(){
      //let valll = this.state.Id;
     // this.props.candidateInfo({valll});
  }


  next(){
    if(this.props.logintrigger){
        this.props.navigation.navigate('LogOrSign');;
    }
}


  onButtonPress(){
    //let valll = this.state.Id;
     // this.props.sendVote({valll});
    
   }

    

        render() {
    
            return (
             <SafeAreaView style={styles.container}>
            
            <HomeHeader2 place2={'ProfileEdit'} ti={this.state.FirstName}  navigate={this.props.navigation.goBack}/>
              

            <Image
                style={{height: 200, width:200, marginTop:30, borderRadius:100}}
                source={require('../.././images/profile.png')}
                resizeMode = 'contain'
                />

        
             <Text style={{width:'96%',alignSelf:"center", padding:12, marginTop:2,fontSize:15}}>
             This is where you add content to your subject First, name the subject element eg Classwork1 , Homework1</Text>
              
              <Text style={{width:'96%',alignSelf:"center", padding:12, paddingTop:2, fontSize:15}}>then enter how much out of the total grade the element is worth. Total mark does not have to be out of 100
           DO NOT GIVE ELEMENTS THE SAME NAME</Text>
             
              
              <Text  style={{ width:'96%',alignSelf:"center", padding:12, marginTop:2, marginBottom:10, fontSize:20}}>Vote For Me</Text>
          
<Button onPress={this.onButtonPress.bind(this)} title="VOTE"/>
{this.next()}
             </SafeAreaView>
            );
          }



}

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:'center',
      backgroundColor: 'white',
      //justifyContent:'space-between',
      flexDirection:'column',
    },
    ImageStyle:{
      //borderWidth: 1,
      flexDirection:'column',
      height: '50%',
      width: '100%',
      justifyContent:'flex-end',
      alignItems: 'center',  
      
  },
  listStyle: {
      padding:27,
      opacity: 0.9,
      justifyContent: 'flex-start',
      width:'100%',
      //height:'10%',
      borderBottomWidth:1,
      borderColor:"white"
  }
  
    
  });

const mapStateToProps = state =>{
    return{
       
      // loading: state.auth.loading1,
      // Vals: state.auth.infol,
      // hope:state.auth.hope,
      //
     }
  };

export default connect(mapStateToProps,{candidateInfo,sendVote})(HomeView);