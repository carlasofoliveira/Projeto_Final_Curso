import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Switch, Image} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { List } from "react-native-paper";
import Carousel from "simple-carousel-react-native";
import { ScrollView } from "react-native";
//  import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

//import { Switch } from 'react-native-paper';

export default function Novo_Evento() {
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

  const [isEnabled4, setIsEnabled4] = useState(false);
  const alternarSwitch4 = () => {
    setIsEnabled4((previousState) => !previousState);
  };

  return (
    <ScrollView style={styles.ScrollView} >
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
        <View style={{ marginBottom: 28 },{ marginRight: 30}}>
          <View style={{ width: 270 }}>
            <Text style={{ fontSize: 15, marginTop: 25, left: 18 }}>
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

        <View style={{ marginBottom: 28 },{ marginRight: 30 }}>
          <View style={{ width: 270 }}>
            <Text style={{ fontSize: 15, marginTop: 25, left: 18 }}>
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

        {shouldShow ? <View>

          <Carousel showBubbles={false} style={styles.tamcarrossel}>
              <View style={styles.fundcarrosel}>
                <Image
                  style={styles.tam}
                  source={require("../pic/evento.jpg")}
                />
                <Text style={{ alignSelf: "flex-start" }} style={styles.titulo}>
                  Bailarico do bairro
                </Text>
                <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                  Aveiro
                </Text>
                <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                  10 Maio
                </Text>
              </View>
              <View style={styles.fundcarrosel}>
                <Image
                  style={styles.tam}
                  source={require("../pic/evento.jpg")}
                />
                <Text style={{ alignSelf: "flex-start" }} style={styles.titulo}>
                  Bailarico do bairro
                </Text>
                <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                  Aveiro
                </Text>
                <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                  10 Maio
                </Text>
              </View>

              <View style={styles.fundcarrosel}>
                <Image
                  style={styles.tam}
                  source={require("../pic/evento.jpg")}
                />
                <Text style={{ alignSelf: "flex-start" }} style={styles.titulo}>
                  Bailarico do bairro
                </Text>
                <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                  Aveiro
                </Text>
                <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                  10 Maio
                </Text>
              </View>
            </Carousel>
        </View> : false}
        <View style={{ marginBottom: 28 },{ marginRight: 30 }}>
          <View style={{ width: 270 }}>
            <Text style={{ fontSize: 15, marginTop: 25, left: 18 }}>
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
        <View style={{ marginBottom: 28 },{ marginRight: 30 }}>
          <View style={{ width: 200 }}>
            <Text style={{ fontSize: 15, marginTop: 25, left: 18 }}>
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
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF5FF",
    paddingLeft: 10,
  },
  ScrollView:{
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
    marginLeft:15,
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
    textAlign: "center",
    fontSize: 25,
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
    width: 350,
    height: 200,
    borderRadius: 10,
    marginTop:-45,
  },
  esp: {
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 0,
    color: "black",
  },

  fundcarrosel: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    color: "black",
  },
  tamcarrossel: {
    height: 200,
  },

});
