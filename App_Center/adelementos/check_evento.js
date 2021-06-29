import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  Image,
  Text,
} from "react-native";


//import { Switch } from 'react-native-paper';

export default function check_evento() {
 

  return (
    <View style={styles.container}>
<Image   style={styles.img} source={require('../assets/icon-ok.png')} />
<Text style={styles.message}> Entidade guardada com sucesso!</Text>
    </View>
  );

 };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF5FF",
    paddingLeft: 10,
  },
  img: {
    position: 'absolute',
    left: 0,
    marginTop:255,
    marginLeft:140,
  },
  message:{
  marginTop:400,
    marginLeft: 75,
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 24,
  }
});
