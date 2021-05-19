import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Switch } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//import { Switch } from 'react-native-paper';

export default function Novo_Evento({ navigation }) {
  const [input, setInput] = React.useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const alternarSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const [isEnabled1, setIsEnabled1] = useState(false);
  const alternarSwitch1 = () => {
    setIsEnabled1((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
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
      <Text style={styles.textitlefirst}> Designação ou Nome* </Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={() => {
          setInput("");
        }}
        placeholder="inserir designação..."
      />

      <Switch
        trackColor={{ false: "#808080", true: "#4F81C7" }}
        thumbColor={!isEnabled ? "#ffffff" : "#FFFFFF"}
        onValueChange={alternarSwitch}
        value={isEnabled}
      />
      <Switch
        trackColor={{ false: "#808080", true: "#4F81C7" }}
        thumbColor={!isEnabled1 ? "#ffffff" : "#FFFFFF"}
        onValueChange={alternarSwitch1}
        value={isEnabled1}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF5FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom:25,
    marginTop:-305,
  },
  content: {
    textAlign: "center",
  },

  Imageinsert: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  box: {
    width: 300,
    height: 177,
    paddingTop: 1,
    marginTop: -70,
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
  textitlefirst: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 10,
    marginTop: 25,
    marginLeft: 25,
  },
  texttitlesecond: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
    marginTop: 25,
    marginLeft: 6,
  },
  input: {
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
  texttitlesecond: {
    fontSize: 25,
    fontWeight: "bold",
    color: "gray",
    paddingBottom: 7,
    marginTop: 5,
    marginLeft: 30,
    paddingLeft: -5,
  },
  switch_button: {
    fontSize: 16,
    lineHeight: 25,
  },
});
