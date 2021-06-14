import React from "react";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";
import { StyleSheet, Text, View, Button } from "react-native";
//import Carousel from "simple-carousel-react-native";
//import Divider from 'rn-dividers';
import { SocialIcon } from "react-native-elements";

export default function registo({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Entrar" />
      </View>
      <View style={styles.buttonContainer1}>
        <Button title="Criar" />
      </View>
      <View>
      <SocialIcon
          style={styles.buttonFacebook}
          title="Sign In With Facebook"
          button
          type="facebook"
        />
        <SocialIcon
          style={styles.buttonTelefone}
          title="Associar número de telemóvel"
          button
          type="phone"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4F81C7",
  },
  buttonContainer: {
    width: 130,
    height: 36,
    borderRadius: 50,
    paddingLeft: 25,
    marginRight: 15,
    marginTop: -250,
  },
  buttonContainer1: {
    width: 130,
    height: 36,
    borderRadius: 50,
    paddingLeft: 25,
    marginRight: -260,
    marginTop: -250,
  },
  buttonFacebook: {
    width: 300,
    borderRadius: 0,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  buttonTelefone: {
    backgroundColor: "#43C5A5",
    width: 300,
    borderRadius: 11,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 10,
  },
});
