import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  Button,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { List, Divider } from "react-native-paper";


//  import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

//import { Switch } from 'react-native-paper';

export default function adicionar_Iniciativas() {
  const [input, setInput] = React.useState("");
  const [shouldShow, setShouldShow] = useState(false);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const alternarSwitch1 = () => {
    setIsEnabled1((previousState) => !previousState);
  };

  const [isEnabled2, setIsEnabled2] = useState(false);
  const alternarSwitch2 = () => {
    setIsEnabled2((previousState) => !previousState);
    setShouldShow(!shouldShow);
  };

  const [isEnabled3, setIsEnabled3] = useState(false);
  const alternarSwitch3 = () => {
    setIsEnabled3((previousState) => !previousState);
  };


  return (
    <ScrollView style={styles.scroll}>
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
      <Text style={styles.textitlefirst}> Designação </Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={() => {
          setInput("");
        }}
        placeholder="inserir designação..."
      />
<View>
    <Text></Text>
    <Divider />
    <Divider />
  </View>
      <List.AccordionGroup style={styles.Accordion}>
        <Text style={styles.esq}>
          <List.Accordion title="Descrição" id="1">
            <TextInput
              style={styles.input}
              onChangeText={(text) => setInput(text)}
              onSubmitEditing={() => {
                setInput("");
              }}
              placeholder="inserir descrição..."
            />
          </List.Accordion>
        </Text>
        <View>
    <Text></Text>
    <Divider />
    <Divider />
  </View>
        <Text style={styles.esq}>
          <List.Accordion title="Local" id="2">
            <TextInput
              style={styles.input}
              onChangeText={(text) => setInput(text)}
              onSubmitEditing={() => {
                setInput("");
              }}
              placeholder="inserir local..."
            />
          </List.Accordion>
        </Text>
      </List.AccordionGroup>
      <View>
    <Text></Text>
    <Divider />
    <Divider />
  </View>
      <View>
        <View style={({ marginBottom: 28 }, { marginRight: 30 })}>
          <View style={{ width: 270 }}>
            <Text style={{ fontSize: 15, marginTop: 25, left: 18 }}>
              {"convidar parceiros"}
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

        <View style={({ marginBottom: 28 }, { marginRight: 30 })}>
          <View style={{ width: 270 }}>
            <Text style={{ fontSize: 15, marginTop: 25, left: 18 }}>
              {"solicitar recursos"}
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

        {shouldShow ? (
        <View>
        
      </View>
         ) : (
          true
        )}

        <View style={({ marginBottom: 28 }, { marginRight: 30 })}>
          <View style={{ width: 270 }}>
            <Text style={{ fontSize: 15, marginTop: 25, left: 18 }}>
              {"solicitar voluntários"}
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
      </View>
    </View>
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF5FF",
    paddingLeft: 10,
  },
  scroll:{
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
  textitlefirst: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 10,
    marginTop: 25,
    marginLeft: 0,
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
});
