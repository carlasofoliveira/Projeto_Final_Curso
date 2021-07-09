import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import { useEffect, useState } from 'react';
import { makeRegistration } from "../adelementos/API_Calls";

export default function SignUpView () {
  const [userName, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  onClickListener = (viewId) => {
    //Alert.alert("Alert", "Button pressed "+viewId);
    makeRegistration(userName, email, password).then((resposta) => {
      console.log("resposta", resposta);
      if (resposta.registado == true){
        Alert.alert("Registado com sucesso");
      }
      else{
        Alert.alert("Falha no registo");
      }
    });
  }
 
  
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Nome "
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => setUsername(fullName)}/>
        
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => setEmail(email)}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => setPassword(password)}/>
        </View>

        <TouchableHighlight  style={[styles.buttonContainer, styles.signupButton]} onPress={() => onClickListener('sign_up')} >
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
       
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEF5FF',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
      backgroundColor: "#9AC4F8",
  },
  inputs:{
    height: 50,
    color: "black",
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
      
     
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#3B5998",
  },
  signUpText: {
    color: 'white',
  }
});
