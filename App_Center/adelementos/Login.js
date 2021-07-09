import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { isLoggedIn } from "../adelementos/API_Calls";
import { SocialIcon } from "react-native-elements";
import { Alert } from "react-native";
import GLOBAL from "../global"

export default function Login ({ navigation }) {
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [isUserLogged, setLoginData] = useState(false);
  

  onClickListener = (viewId) => {
    isLoggedIn(email, password).then((isLogged) => {
      console.log("isLogged", isLogged.logado);
      setLoginData(isLogged.logado);
      if (isLogged.logado) {
        Alert.alert("Login com sucesso");
        GLOBAL.PASSWORD = password;
        GLOBAL.EMAIL = email;
        navigation.navigate("Inicio");
      }
      else{
        Alert.alert("Login sem sucesso");
        GLOBAL.PASSWORD = null;
        GLOBAL.EMAIL = null;
      }
    });
  }
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Login</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => onClickListener('Login')}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <SocialIcon style={styles.buttonFacebook} title="Sign In With Facebook" button type="facebook" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF5FF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#9AC4F8",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#9AC4F8",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "black",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#9AC4F8",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "black",
  },
  buttonFacebook:{
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});
