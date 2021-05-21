import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Switch } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { List } from "react-native-paper";
//import { Switch } from 'react-native-paper';

export default function Novo_Evento() {
  const [input, setInput] = React.useState("");
  const [shouldShow, setShouldShow] = useState(false);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const alternarSwitch1 = () => {
    setIsEnabled1((previousState) => !previousState);
    setShouldShow(!shouldShow);
  };

  const [isEnabled2, setIsEnabled2] = useState(false);
  const alternarSwitch2 = () => {
    setIsEnabled2((previousState) => !previousState);
  };

  const [isEnabled3, setIsEnabled3] = useState(false);
  const alternarSwitch3 = () => {
    setIsEnabled3((previousState) => !previousState);
  };

  const [isEnabled4, setIsEnabled4] = useState(false);
  const alternarSwitch4 = () => {
    setIsEnabled4((previousState) => !previousState);
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

      <List.AccordionGroup>
        <Text style={{ position: "relative" }}>
          <List.Accordion title="Descrição" id="1">
            <TextInput
              style={styles.input}
              onChangeText={(text) => setInput(text)}
              onSubmitEditing={() => {
                setInput("");
              }}
            />
          </List.Accordion>
        </Text>
        <Text>
          <List.Accordion title="Local" id="2">
            <TextInput
              style={styles.input}
              onChangeText={(text) => setInput(text)}
              onSubmitEditing={() => {
                setInput("");
              }}
              placeholder="inserir designação..."
            />
          </List.Accordion>
        </Text>
      </List.AccordionGroup>

      <View>
        <View style={{ marginBottom: 28 }}>
          <View style={{ width: 270 }}>
            <Text style={{ fontSize: 15, marginTop: 6.02, left: 0.21 }}>
              {"apresentar data/período"}
            </Text>
          </View>
          <Switch
            style={{ marginTop: -25, paddingBottom: -3 }}
            trackColor={{ false: "#808080", true: "#4F81C7" }}
            thumbColor={!isEnabled1 ? "#ffffff" : "#E5E5EA"}
            onValueChange={alternarSwitch1}
            value={isEnabled1}
          />
        </View>
       

        {shouldShow ? (
          <View style={{ marginBottom: 28 }}>
            <View style={{ width: 270 }}>
              <Text style={{ fontSize: 15, marginTop: 6.02, left: 0.21 }}>
                {"convidar parceiros"}
              </Text>
            </View>
            <Switch
              style={{ marginTop: -25 }}
              trackColor={{ false: "#808080", true: "#4F81C7" }}
              thumbColor={!isEnabled2 ? "#ffffff" : "#FFFFFF"}
              onValueChange={alternarSwitch2}
              value={isEnabled2}
            />
          </View>
        ) : (
          true
        )}

        <View style={{ marginBottom: 28 }}>
          <View style={{ width: 270 }}>
            <Text style={{ fontSize: 15, marginTop: 6.02, left: 0.21 }}>
              {"solicitar recursos"}
            </Text>
          </View>
          <Switch
            style={{ marginTop: -25 }}
            trackColor={{ false: "#808080", true: "#4F81C7" }}
            thumbColor={!isEnabled3 ? "#ffffff" : "#FFFFFF"}
            onValueChange={alternarSwitch3}
            value={isEnabled3}
          />
        </View>
        <View style={{ marginBottom: 28 }}>
          <View style={{ width: 270 }}>
            <Text style={{ fontSize: 15, marginTop: 6.02, left: 0.21 }}>
              {"solicitar voluntários"}
            </Text>
          </View>
          <Switch
            style={{ marginTop: -25 }}
            trackColor={{ false: "#808080", true: "#4F81C7" }}
            thumbColor={!isEnabled4 ? "#ffffff" : "#FFFFFF"}
            onValueChange={alternarSwitch4}
            value={isEnabled4}
          />
        </View>
      </View>
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
  content: {
    textAlign: "center",
  },

  Imageinsert: {
    paddingTop: -25,
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
});
