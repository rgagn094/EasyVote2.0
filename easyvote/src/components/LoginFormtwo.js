import React, { Component } from 'react';
import {FormInput,Card,FormButton,HomeHeader2,Spinner,ForwardButton} from './index';
import {connect} from 'react-redux';
import {emailChanged,passwordChanged2,LicenseChanged,LastFourChanged,FirstNameChanged,LastNameChanged,passwordChanged,numberChanged,Signup} from '../actions';
import { AsyncStorage } from "react-native"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  SafeAreaView,
  Keyboard
} from 'react-native';


class LoginFormtwo extends Component {
  

  state = {
      
   
    FirstName:  this.props.navigation.state.params.FirstName,
    LastName:this.props.navigation.state.params.LastName,
    number:  this.props.navigation.state.params.number,
    email: this.props.navigation.state.params.email,

    //Average: this.props.navigation.state.params.item.ave,
      
}


  next(){
    if(this.props.logintrigger){
        this.props.navigation.navigate('Profile',{Id: this.props.Active});;
    }
}

      
  onFirstNameChanged(text){
    this.props.FirstNameChanged(text);
}

  onLastNameChanged(text){
    this.props.LastNameChanged(text);
  }

     onEmailChanged(text){
        this.props.emailChanged(text);
    }

    onNumberChanged(text){
      this.props.numberChanged(text);
  }
    
    onPasswordChanged(text){
        this.props.passwordChanged(text);
     } 

     onPasswordChanged2(text){
      this.props.passwordChanged2(text);
   } 

   onLastFourChanged(text){
    this.props.LastFourChanged(text);
}

onLicenseChanged(text){
  this.props.LicenseChanged(text);
}

     onButtonPress(){
      const {FirstName,LastName,number,email} = this.state;
       const {password,password2,Licence,fourD} = this.props;
       console.log(FirstName,LastName,number,email,password,password2,Licence,fourD);
       this.props.navigation.navigate('Profile');
     // this.props.Signup({FirstName,LastName,number,email,password,password2,Licence,fourD});
      
     }

   /* renderError(){
    if(this.props.error){
      return(
        <View>
          <Text style={{alignSelf: 'center', color: 'red'}}> {this.props.error}</Text>
        </View>
      );
    }
  } */

  renderButton(){
    /* if(this.props.loading){
      return <Spinner size="large"/>;
    }
    else{ */
     return <FormButton /*press={this.onButtonPress.bind(this)}*/ val = {"Login"}/>;
   // }
  }

  render() {
    //const {vall} = this.props;
    return (
    <SafeAreaView style={{backgroundColor:'white', height:'100%'}}>
    <HomeHeader2 navigate={this.props.navigation.goBack}/>
      <KeyboardAvoidingView style={{width:'90%',alignSelf:'center', marginBottom:'0%'}}  behavior = {(Platform.OS === 'ios') ? 'height' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
        
      
        
        
        {/* <View style={{height: 40, alignItems:'center', alignSelf: 'center', width: "100%"}}> */}
        <View style = {styles.viewStyle}>
        <Text style = {{ alignSelf:'flex-start', fontSize: 19}}>Create Password</Text>
        </View>

        <Card>
        <FormInput val={this.props.password} ct={this.onPasswordChanged.bind(this)} bool = {true} ph = {"Input Password"}/>
        </Card>
        <Card>
        <FormInput val={this.props.password2} ct={this.onPasswordChanged2.bind(this)}  bool = {true} ph = {"Confirm Password"}/>
        </Card>


        <View style = {styles.viewStyle}>
        <Text style = {{ alignSelf:'flex-start', fontSize: 19}}>Enter Security Info</Text>
        </View>

        <Card>
        <FormInput val={this.props.Licence} ct={this.onLicenseChanged.bind(this)} bool = {true} ph = {"Drivers License"}/>
        </Card>
        <Card>
        <FormInput val={this.props.fourD} ct={this.onLastFourChanged.bind(this)}  bool = {true} ph = {"Input last 4 Digits of SIN"}/>
        </Card>
       {/* </View> */}
       <View >
      <ForwardButton press={this.onButtonPress.bind(this)} place ={'Profile'}/>
       
       </View>
       {this.next()}
       </View>
       
       
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      
      </SafeAreaView>
     
       
      
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F4F2F3',
      width: '100%',


    },
    viewStyle: {
        //height: '100%',
       marginTop: 20,
        width: '100%',
    },
   
    
  });

  const mapStateToProps = state =>{
    return{
       email: state.auth.email,
       password: state.auth.password,
       FirstName: state.auth.FirstName,
       LastName: state.auth.LastName,
       number: state.auth.Number,
       password2: state.auth.password2,
       Licence:state.auth.Licence,
       fourD:state.auth.fourD,
       logintrigger:state.auth.logintrigger,
       Active:state.auth.Active,
       
       
    }
};

export default connect(mapStateToProps,{emailChanged,LicenseChanged,LastFourChanged,passwordChanged2,FirstNameChanged,LastNameChanged,passwordChanged,numberChanged,Signup})(LoginFormtwo) ;
