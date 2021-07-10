import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ListItem } from "react-native-elements";
import { useEffect, useState } from "react";
import { List, Divider, IconButton } from "react-native-paper";
import { makeRegistration } from "../adelementos/API_Calls";

import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";

const list = [
  {
    title: "participação individual",
    component: "Participacao individual",
  },
  {
    title: "Setor Público",
    component: "setor publico",
  },
  {
    title: "Setor Privado",
    component: "setor privado",
  },
  {
    title: "terceiro setor",
    component: "terceiro setor",
  },
  {
    title: "rede de entidades",
    component: "rede de entidades",
  },
];

export default function SignUpView({ navigation }) {
  const [userName, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  onClickListener = (viewId) => {
    //Alert.alert("Alert", "Button pressed "+viewId);
    makeRegistration(userName, email, password).then((resposta) => {
      console.log("resposta", resposta);
      if (resposta.registado == true) {
        Alert.alert("Registado com sucesso");
      } else {
        Alert.alert("Falha no registo");
      }
    });
  };

  return (
    <View style={styles.viewall}>
      <ScrollView style={styles.scroll}>
        <View style={styles.Imageinsert}>
          <LinearGradient
            colors={["#E3CEF6", "#CEF6EC"]}
            start={{
              x: 0,
              y: 0,
            }}
            end={{
              x: 1,
              y: 1,
            }}
            style={styles.box}
          />
        </View>
        <Text style={styles.titleinputNome}> Nome </Text>
        <StatusBar style="auto" />
        <TextInput
          style={styles.inputNome}
          onChangeText={(fullName) => setUsername(fullName)}
          onSubmitEditing={() => {
            setInput("");
          }}
          placeholder="Inserir Nome"
        />
        <Text style={styles.titleEmail}> Email </Text>
        <StatusBar style="auto" />
        <TextInput
          style={styles.inputEmail}
          onChangeText={(email) => setEmail(email)}
          onSubmitEditing={() => {
            setInput("");
          }}
          placeholder="Inserir Email"
        />
        <Text style={styles.titletPassword}> Password </Text>
        <StatusBar style="auto" />
        <TextInput
          style={styles.inputPassword}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          onSubmitEditing={() => {
            setInput("");
          }}
          placeholder="Inserir password"
        />
        <View>
          <Text style={styles.texttitlesecond}> Tipo de Edentidade* </Text>
          {list.map((item, i) => (
            <ListItem
              containerStyle={{ backgroundColor: "#EEF5FF" }}
              key={i}
              bottomDivider
              button
              chevron={{ color: "red" }}
              onPress={() => navigation.navigate(item.component)}
            >
              <ListItem.Title style={{ color: "#345481" }}>
                {item.title}
              </ListItem.Title>
              <ListItem.Chevron />
            </ListItem>
          ))}
        </View>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.signupButton]}
          onPress={() => onClickListener("sign_up")}
        >
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
      </ScrollView>
      <View style={styles.headerFooterStyle}>
        <IconButton
          style={styles.iconbutton}
          icon="check-circle"
          color={"gray"}
          size={45}
          onPress={() => onClickListener("Login")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF5FF",
    paddingLeft: 10,
  },
  viewall:{
    backgroundColor: "#EEF5FF",
  },
  ScrollView: {
    backgroundColor: "#EEF5FF",
  },
  esq: {
    textAlign: "left",
  },

  Imageinsert: {
    paddingTop: -25,
    paddingHorizontal: 30,
  },
  box: {
    width: 300,
    height: 177,
    paddingTop: 1,
    marginTop: 20,
    marginLeft: 15,
    borderRadius: 20,
  },
  button: {
    marginTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 40,
    paddingRight: 60,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
  },
  titleinputNome: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 10,
    marginTop: 20,
    marginLeft: 0,
  },
  titleEmail:{
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 10,
    marginTop: 20,
    marginLeft: 0,
  },
  titletPassword:{
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 10,
    marginTop: 20,
    marginLeft: 0,
  },
  inputNome: {
    backgroundColor: "white",
    fontSize: 16,
    fontStyle: "normal",
    width: 350,
    borderWidth: 1,
    borderRadius: 12,
    padding: 1,
    paddingLeft: 25,
    marginTop: -5,
    marginRight: 16,
    marginBottom: 15,
    borderColor: "#FFFFFF",
  },
  inputEmail: {
    backgroundColor: "white",
    fontSize: 16,
    fontStyle: "normal",
    width: 350,
    borderWidth: 1,
    borderRadius: 12,
    padding: 1,
    paddingLeft: 25,
    marginTop: -5,
    marginRight: 16,
    marginBottom: 15,
    borderColor: "#FFFFFF",
  },
  inputPassword: {
    backgroundColor: "white",
    fontSize: 16,
    fontStyle: "normal",
    width: 350,
    borderWidth: 1,
    borderRadius: 12,
    padding: 1,
    paddingLeft: 25,
    marginTop: -5,
    marginRight: 16,
    marginBottom: 15,
    borderColor: "#FFFFFF",
  },
  content: {
    backgroundColor: "#EEF5FF",
  },
  ListItem: {
    color: "black",
  },
  preto: {
    color: "black",
  },
  back: {
    backgroundColor: "#EEF5FF",
  },
  Chevron: {
    tintColor: "#EEF5FF",
  },
  Text: {
    marginTop: 20,
  },
  tam: {
    height: 50,
    borderRadius: 10,
  },
  esp: {
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 0,
    color: "black",
  },
  tamcarrossel: {
    height: 50,
    marginBottom: -1,
    paddingBottom: 0,
  },
  fundcarrosel: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  titulo: {
    fontSize: 20,
    marginTop: 5,
    paddingLeft: 15,
    color: "white",
    backgroundColor: "#A16623",
  },

  headerFooterStyle: {
    width: 700,
    marginTop: 400,
    height: 51,
    marginLeft: -9,
    backgroundColor: "white",
  },
  iconbutton: {
    marginLeft: 170,
    marginTop: -10,
    position: "relative",
  },
  solicitar:{
    height: 40,
    margin: 9,
    borderWidth: 1,
   backgroundColor:"#FFFFFF",
   borderColor:"#FFFFFF",

  },
  convidar:{
paddingLeft:100,
borderRadius:100,
height:45,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:150,
    width:85,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#3B5998",
  },
  ignUpText: {
    color: 'white',
  },
  iconbutton: {
    marginLeft: 170,
    marginTop: -10,
    position: "relative",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 150,
    width: 85,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: "#3B5998",
  },
  ignUpText: {
    color: "white",
  },
});
