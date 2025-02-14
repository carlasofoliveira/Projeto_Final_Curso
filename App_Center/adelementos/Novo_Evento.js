import { StatusBar } from "expo-status-bar";
import React, {  useEffect, useState } from "react";
import { isLoggedIn } from "../adelementos/API_Calls";
import { StyleSheet, Text, View, TextInput, Switch, Image, ActivityIndicator,  TouchableHighlight} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { List, Divider, IconButton } from "react-native-paper";
import Carousel from "simple-carousel-react-native";
import { ScrollView } from "react-native";
import Entrar_criar from "../adelementos/Entrar_criar";
import GLOBAL from "../global";
import { criarnovoevento } from "../adelementos/API_Calls";

import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";
//  import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

//import { Switch } from 'react-native-paper';
import DatePicker from "react-native-modern-datepicker";

export default function Novo_Evento({navigation}) {
  const [input, setInput] = React.useState("");
  const [shouldShow1, setShouldShow1] = useState(false);
  const [shouldShow2, setShouldShow2] = useState(false);
  const [shouldShow3, setShouldShow3] = useState(false);
  const [shouldShow4, setShouldShow4] = useState(false);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const alternarSwitch1 = () => {
    setIsEnabled1((previousState) => !previousState);
    setShouldShow1(!shouldShow1);
  };

  const [isEnabled2, setIsEnabled2] = useState(false);
  const alternarSwitch2 = () => {
    setIsEnabled2((previousState) => !previousState);
    setShouldShow2(!shouldShow2);
  };

  const [isEnabled3, setIsEnabled3] = useState(false);
  const alternarSwitch3 = () => {
    setIsEnabled3((previousState) => !previousState);
    setShouldShow3(!shouldShow3);
  };

  const [isEnabled4, setIsEnabled4] = useState(false);
  const alternarSwitch4 = () => {
    setIsEnabled4((previousState) => !previousState);
    setShouldShow4(!shouldShow4);
  };

  const [isLoading, setLoading] = useState(true);
  const [isUserLogged, setLoginData] = useState(true);

  const [designacao, setdesignacao] = useState(null);
  const [descricao, setdescricao] = useState(null);
  const [local, setlocal] = useState(null);
  const [datatime, setdatatime] = useState(null);

  onClickListenerEvento = (viewId) => {
    //Alert.alert("Alert", "Button pressed "+viewId);
    criarnovoevento(designacao, descricao, local, datatime).then((resposta) => {
      console.log("resposta", resposta);
      if (resposta.novoevento == true){
        Alert.alert("Novo evento criado com sucesso"); 
      }
      else{
      
      }
    });
  }
 

  const onChange = (selectedatatime) => {
    console.log(selectedatatime);
    const currentDate = selectedatatime || datatime;
    //setShow(Platform.OS === 'ios');
    console.log(currentDate)
    setdatatime(currentDate);
  };

useEffect(() => {
    //console.log("email: ", GLOBAL.EMAIL);
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
    <ScrollView style={styles.ScrollView}>
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
        onChangeText={(Designacao) => setdesignacao(Designacao)}
        onSubmitEditing={() => {
          setInput("");
        }}
        placeholder="inserir designação..."
        value={designacao}
      />
      <Divider />
      <Divider />
      <List.AccordionGroup style={styles.Accordion}>
        <Text style={styles.esq}>
          <List.Accordion title="Descrição" id="1">
            <TextInput
              style={styles.input}
              onChangeText={(Descricao) => setdescricao(Descricao)}
              onSubmitEditing={() => {
                setInput("");
              }}
              placeholder="inserir descrição..."
              value={descricao}
            />
          </List.Accordion>
        </Text>
        <Divider />
        <Divider />
        <Text style={styles.esq}>
          <List.Accordion title="Local" id="2">
            <TextInput
              style={styles.input}
              onChangeText={(Local) => setlocal(Local)}
              onSubmitEditing={() => {
                setInput("");
              }}
              placeholder="inserir local..."
              value={local}
            />
          </List.Accordion>
        </Text>
      </List.AccordionGroup>
      <Divider />
      <Divider />

      <View style={({ marginBottom: 28 }, { marginRight: 30 })}>
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
      {shouldShow1 ? (
        <DatePicker
          options={{
            backgroundColor: "#FFFFFF",
            textHeaderColor: "black",
            textDefaultColor: "black",
            selectedTextColor: "blue",
            mainColor: "#96C2FF",
            textSecondaryColor: "black",
            borderColor: "rgba(122, 146, 165, 0.1)",
          }}
          current="2021-07-13"
          selected="2021-07-23"
          mode="calendar"
          minuteInterval={30}
          value={datatime}
          onDateChange={onChange}
          style={{ borderRadius: 20 }}
        />
      ) : (
        false
      )}
      <View style={({ marginBottom: 28 }, { marginRight: 30 })}>
        <View style={{ width: 270 }}>
          <Text style={{ fontSize: 16, marginTop: 25, left: 18 }}>
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

      {shouldShow2 ? (
        <View>
          <Carousel showBubbles={false} style={styles.tamcarrossel} height={75}>
            <View style={styles.fundcarrosel}>
              <Text style={styles.titulo}>Oferta</Text>
              <Text style={{ alignSelf: "flex-start" }}>Assistente Médico</Text>
              <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                Aveiro
              </Text>
            </View>
            <View style={styles.fundcarrosel}>
              <Text style={{ alignSelf: "flex-start" }} style={styles.titulo}>
                Oferta
              </Text>
              <Text style={{ alignSelf: "flex-start" }}>
                Assistente Veterinário
              </Text>
              <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                Aveiro
              </Text>
            </View>

            <View style={styles.fundcarrosel}>
              <Text style={{ alignSelf: "flex-start" }} style={styles.titulo}>
                Oferta
              </Text>
              <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                Aveiro
              </Text>
              <Text style={styles.esp}>Animador</Text>
            </View>
          </Carousel>
        </View>
      ) : (
        false
      )}
      <View style={({ marginBottom: 28 }, { marginRight: 30 })}>
        <View style={{ width: 270 }}>
          <Text style={{ fontSize: 16, marginTop: 25, left: 18 }}>
            {"solicitar recursos"}
          </Text>
        </View>
        <Switch
          style={{ marginTop: -25 }}
          trackColor={{ false: "#808080", true: "#4F81C7" }}
          thumbColor={!isEnabled2 ? "#ffffff" : "#FFFFFF"}
          onValueChange={alternarSwitch3}
          value={isEnabled3}
        />
      </View>

      {shouldShow3 ? (
        <View>
          <Carousel showBubbles={false} style={styles.tamcarrossel} height={75}>
            <View style={styles.fundcarrosel}>
              <Text style={styles.titulo}>Oferta</Text>
              <Text style={{ alignSelf: "flex-start" }}>Assistente Médico</Text>
              <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                Aveiro
              </Text>
            </View>
            <View style={styles.fundcarrosel}>
              <Text style={{ alignSelf: "flex-start" }} style={styles.titulo}>
                Oferta
              </Text>
              <Text style={{ alignSelf: "flex-start" }}>
                Assistente Veterinário
              </Text>
              <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                Aveiro
              </Text>
            </View>

            <View style={styles.fundcarrosel}>
              <Text style={{ alignSelf: "flex-start" }} style={styles.titulo}>
                Oferta
              </Text>
              <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                Aveiro
              </Text>
              <Text style={styles.esp}>Animador</Text>
            </View>
          </Carousel>
        </View>
      ) : (
        false
      )}
      <View style={({ marginBottom: 28 }, { marginRight: 30 })}>
        <View style={{ width: 200 }}>
          <Text style={{ fontSize: 16, marginTop: 25, left: 18 }}>
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
        
        {shouldShow4 ? (
          <View>
            <Carousel
              showBubbles={false}
              style={styles.tamcarrossel}
              height={75}
            >
              <View style={styles.fundcarrosel}>
                <Text style={styles.titulo}>Oferta</Text>
                <Text style={{ alignSelf: "flex-start" }} >
                  Assistente Médico 
                </Text>
                <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                  Aveiro
                </Text>
              </View>
              <View style={styles.fundcarrosel}>
                <Text style={{ alignSelf: "flex-start" }} style={styles.titulo}>
                  Oferta
                </Text>
                <Text style={{ alignSelf: "flex-start" }}>
                  Assistente Veterinário
                </Text>
                <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                  Aveiro
                </Text>
              </View>

              <View style={styles.fundcarrosel}>
                <Text style={{ alignSelf: "flex-start" }} style={styles.titulo}>
                  Oferta
                </Text>
                <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                  Aveiro
                </Text>
                <Text style={styles.esp}>Animador</Text>
              </View>
            </Carousel>
            
            <View>
              <TextInput
              style={styles.solicitar}
              onChangeText={(text) => setVoluntario(text)}
              onSubmitEditing={() => {
                setInput("");
              }}
              placeholder="procurar voluntários…"
            />
            <TouchableHighlight  style={[styles.buttonContainer, styles.signupButton]} onPress={() => onClickListener('sign_up')} >
          <Text style={styles.signUpText}>solicitar</Text>
        </TouchableHighlight>
            </View>
          </View>
          
          
        ) : (
          false
        )}
      <View style={styles.headerFooterStyle}>
        <IconButton
          style={styles.iconbutton}
          icon="check-circle"
          color={"gray"}
          size={45}
          onPress={() => onClickListenerEvento("")}
        />
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
});