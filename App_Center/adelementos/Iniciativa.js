import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { isLoggedIn } from "../adelementos/API_Calls";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  Button,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { List, Divider, IconButton } from "react-native-paper";
import Entrar_criar from "../adelementos/Entrar_criar";
import GLOBAL from "../global"
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";



export default function adicionar_Iniciativas( {navigation} ) {

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

  const [isLoading, setLoading] = useState(true);
  const [isUserLogged, setLoginData] = useState(true);

  useEffect(() => {
    console.log("email: ", GLOBAL.EMAIL);
    if (GLOBAL.EMAIL !== null && GLOBAL.PASSWORD !== null){
      isLoggedIn(GLOBAL.EMAIL, GLOBAL.PASSWORD).then((isLogged) => {
      console.log("isLogged", isLogged.logado);
      setLoginData(isLogged.logado);
      setLoading(false);
      });
    }
    else{
      setLoginData(false);
      setLoading(false);
    }
    
  }, []);


  return (
    <View style={{ flex: 1 }}>
    {isLoading ? (
      <ActivityIndicator />
    ) : (
      [
        isUserLogged ? (
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
                  <List.Accordion title="Descrição" id="1" key="1">
                    <TextInput
                      style={styles.input}
                      onChangeText={(text) => setInput(text)}
                      onSubmitEditing={() => {
                        setInput("");
                      }}
                      placeholder="inserir descrição..."
                      key="11"
                    />
                  </List.Accordion>
                </Text>
                <View>
                  <Divider />
                  <Divider />
                </View>
                <Text style={styles.esq}>
                  <List.Accordion title="Local" id="2" key="2">
                    <TextInput
                      style={styles.input}
                      onChangeText={(text) => setInput(text)}
                      onSubmitEditing={() => {
                        setInput("");
                      }}
                      placeholder="inserir local..."
                      key="22"
                    />
                  </List.Accordion>
                </Text>
              </List.AccordionGroup>
              <View>
                <Divider />
                <Divider />
              </View>
              <View>
                <View style={({ marginBottom: 28 }, { marginRight: 30 })}>
                  <View style={{ width: 270 }}>
                    <Text style={{ marginTop: 25, left: 18 }}>
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
                    <Text style={{  marginTop: 25, left: 18 }}>
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

                {shouldShow ? <View></View> : true}

                <View style={({ marginBottom: 28 }, { marginRight: 30 })}>
                  <View style={{ width: 270 }}>
                    <Text style={{ marginTop: 25, left: 18 }}>
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
              <View style={styles.headerFooterStyle}>
                <IconButton
                  style={styles.iconbutton}
                  icon="check-circle"
                  color={"gray"}
                  onPress={() => console.log("Pressed")}
                />
              </View>
            </View>
         </ScrollView>
        ) : (
          <Entrar_criar navigation={navigation}
          />
        ),
      ]
    )}
    </View> 
);
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF5FF",
    paddingLeft: 10,
  },
  scroll: {
    backgroundColor: "#EEF5FF",
    flexGrow: 1,
    height: "100%",
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
  },
   textitle:{
     fontSize:25,
     fontWeight:"bold",
     color:"gray",
    marginTop:25,
    marginLeft:25,
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
  texsecondtitle:{
    fontSize:25,
    fontWeight:"bold",
   marginTop:20,
   marginLeft:25,
   color:"gray",
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
    headerFooterStyle: {
      width: 700,
      marginTop: 600,
      height: 51,
      marginLeft: -9,
      backgroundColor: "white",
    },
    iconbutton: {
      marginLeft: 170,
      marginTop: -10,
      position: "absolute",
    },
});
