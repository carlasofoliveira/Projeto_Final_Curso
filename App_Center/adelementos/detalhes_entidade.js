import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Switch } from "react-native";
import { SocialIcon } from "react-native-elements";
import { List } from "react-native-paper";
import CustomMultiPicker from "react-native-multiple-select-list";
import { ScrollView } from "react-native";
import Slider from "@react-native-community/slider";

//  import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

//import { Switch } from 'react-native-paper';

const centrosinteresse = {
  1: "Aveiro",
  2: "Castelo Branco",
  3: "Comércio e Mercados",
  4: "Coimbra",
  5: "Guarda",
  6: "Leiria",
  7: "Viseu",
};

export default function detalhes_entidade() {
  const [input, setInput] = React.useState("");
  const [shouldShow, setShouldShow] = useState(false);
  const [shouldShow1, setShouldShow1] = useState(false);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const alternarSwitch1 = () => {
    setIsEnabled1((previousState) => !previousState);
    setShouldShow(!shouldShow);
  };
  const [isEnabled2, setIsEnabled2] = useState(false);
  const alternarSwitch2 = () => {
    setIsEnabled2((previousState) => !previousState);
    setShouldShow1(!shouldShow1);
  };
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <ScrollView style={{ backgroundColor: "#EEF5FF" }}>
      <View style={styles.container}>
        
        <View>
          <Text style={styles.textitlefirst}> morada </Text>
          <StatusBar style="auto" />
          <TextInput
            style={styles.input1}
            onChangeText={(text) => setInput(text)}
            onSubmitEditing={() => {
              setInput("");
            }}
            placeholder="inserir designação..."
          />
        </View>
        <View>
          <Text style={styles.textitlefirst1}> contactos </Text>
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
        <View>
          <TextInput
            style={styles.input2}
            onChangeText={(text) => setInput(text)}
            onSubmitEditing={() => {
              setInput("");
            }}
            placeholder="email"
          />
          <TextInput
            style={styles.input3}
            onChangeText={(text) => setInput(text)}
            onSubmitEditing={() => {
              setInput("");
            }}
            placeholder="website"
          />
        </View>
        <View>
          <List.AccordionGroup>
            <Text style={styles.esq}>
              <List.Accordion title="locais de interesse" id="1">
                <View style={({ marginBottom: 28 }, { marginRight: 30 })}>
                  <View style={({ marginBottom: 28 }, { marginRight: 30 })}>
                    <View style={{ width: 270 }}>
                      <Text style={{ fontSize: 15, marginTop: 25, left: 18 }}>
                        {"minha localização atual"}
                      </Text>
                    </View>
                    <Switch
                      style={{ marginTop: -25, paddingBottom: -3 }}
                      trackColor={{ false: "#808080", true: "#4F81C7" }}
                      thumbColor={!isEnabled1 ? "#ffffff" : "#E5E5EA"}
                      onValueChange={alternarSwitch1}
                      value={isEnabled1}
                    />
                    {shouldShow ? (
                      <View>
                        <Text style={{ color: "black" }}>
                          Distância : {sliderValue} km
                        </Text>
                        <Slider
                          maximumValue={100}
                          minimumValue={0}
                          minimumTrackTintColor="#97C2FF"
                          maximumTrackTintColor="#1F3699"
                          step={1}
                          value={sliderValue}
                          onValueChange={(sliderValue) =>
                            setSliderValue(sliderValue)
                          }
                        />
                      </View>
                    ) : (
                      false
                    )}
                    <View style={{ flex: 1, flexDirection: "row" }}></View>
                  </View>
                  <View>
                    <View style={({ marginBottom: 28 }, { marginRight: 30 })}>
                      <View style={{ width: 270 }}>
                        <Text style={{ fontSize: 15, marginTop: 25, left: 18 }}>
                          {"meus centros de interesse"}
                        </Text>
                      </View>
                      <Switch
                        style={{ marginTop: -25, paddingBottom: -3 }}
                        trackColor={{ false: "#808080", true: "#4F81C7" }}
                        thumbColor={!isEnabled2 ? "#ffffff" : "#E5E5EA"}
                        onValueChange={alternarSwitch2}
                        value={isEnabled2}
                      />
                      {shouldShow1 ? (
                        <CustomMultiPicker
                          options={centrosinteresse}
                          search={false} // should show search bar?
                          multiple={true} //
                          returnValue={"label"} // label or value
                          callback={(res) => {
                            console.log(res);
                          }} // callback, array of selected items
                          rowBackgroundColor={"#97C2FF"}
                          rowHeight={36}
                          rowRadius={11.55}
                          iconColor={"blue"}
                          iconSize={30}
                          selectedIconName={"ios-checkmark-circle-outline"}
                          unselectedIconName={"ios-radio-button-off-outline"}
                          selected={"none"} // list of options which are selected by default
                          scrollViewHeight={500}
                          checkmar={"yellow"}
                        />
                      ) : (
                        false
                      )}
                    </View>
                  </View>
                </View>
              </List.Accordion>
            </Text>
          </List.AccordionGroup>

          <List.AccordionGroup>
            <Text style={styles.esq}>
              <List.Accordion title="Descrição" id="1">
                <View style={({ marginBottom: 28 }, { marginRight: 30 })}>
                  <TextInput
                    style={styles.input1}
                    onChangeText={(text) => setInput(text)}
                    onSubmitEditing={() => {
                      setInput("");
                    }}
                    placeholder="inserir designação..."
                  />
                </View>
              </List.Accordion>
            </Text>
          </List.AccordionGroup>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF5FF",
    paddingLeft: 25,
  },
  esq: {
    textAlign: "left",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
  },
  textitlefirst: {
    width: 274.15,
    height: 19,
    fontWeight: 500,
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 1,
    marginTop: 12,
    marginLeft: 0,
  },
  textitlefirst1: {
    width: 274.15,
    height: 19,
    fontWeight: 500,
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 1,
    marginTop: 12,
    marginLeft: 0,
  },

  input1: {
    backgroundColor: "white",
    fontSize: 16,
    fontStyle: "normal",
    width: 326,
    height: 78,
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 24.5,
    borderRadius: 11.55,
    marginRight: 16,

    borderColor: "#FFFFFF",
  },
  buttonFacebook: {
    width: "80%",
    borderRadius: 0,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 15,
  },
  buttonTelefone: {
    backgroundColor: "#43C5A5",
    width: "80%",
    borderRadius: 16,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -5,
    marginBottom: 10,
    marginLeft: 20,
  },
  input2: {
    fontSize: 16,
    lineHeight: 18.75,
    marginTop: 5,
    width: 326,
    backgroundColor: "white",
    height: 36,
    borderRadius: 11.55,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  input3: {
    lineHeight: 18.75,
    fontSize: 16,
    width: 326,
    backgroundColor: "white",
    height: 36,
    borderRadius: 11.55,
    marginTop: 15,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  
});
