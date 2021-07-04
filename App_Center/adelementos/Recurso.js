import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { isLoggedIn } from "../adelementos/API_Calls";
import { StyleSheet, Text, View, TextInput, Switch, ActivityIndicator, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { List, Divider, IconButton } from "react-native-paper";
import CustomMultiPicker from "react-native-multiple-select-list";
import { ScrollView,  } from "react-native-gesture-handler";
import Entrar_criar from "../adelementos/Entrar_criar";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";

//  import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

//import { Switch } from 'react-native-paper';
const setoratividade = {
  1: "Agricultura",
  2: "Ambiente, Natureza e Clima",
  3: "Comércio e Mercados",
  4: "Cultura e Património",
  5: "Atividade física e desportiva",
  6: "Educação e Formação",
  7: "Emprego e Empreendedorismo",
  8: "Energia (Produção e Eficiência)",
  9: "Florestas",
  10: "Infraestruturas e equipamentos",
  11: "Investigação e Inovação",
  12: "Mar e Pesca",
  13: "Mobilidade e Transporte",
  14: "Ordenamento do Território",
  15: "Políticas Sociais",
  16: "Saúde e Bem-Estar",
  17: "Segurança e Proteção Civil",
  18: "Inovação e Competitividade",
  19: "Turismo",
  20: "Cidadania e Participação Cívica",
  21: "Geral",
};
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
  const [isLoading, setLoading] = useState(true);
  const [isUserLogged, setLoginData] = useState(true);

  useEffect(() => {
    setLoading(false);
    isLoggedIn("test1", "xpto").then((isLogged) => {
      console.log("isLogged", isLogged.logado);
      setLoginData(isLogged.logado);
    });
  }, []);



  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        [
          isUserLogged ? (
  <ScrollView>
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
      <Text style={styles.textitlefirst}> Designação * </Text>
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
        <View style={({ marginBottom: 28 }, { marginRight: 30 })}>
          <View style={{ width: 270 }}>
            <Text style={{ fontSize: 15, marginTop: 25, left: 18 }}>
              {"a oferecer"}
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
              {"a procurar"}
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
      </View>

      <View>
        <List.AccordionGroup style={styles.Accordion}>
          <Text style={styles.esq}>
            <List.Accordion title="Descrição" id="1">
              <TextInput
                style={styles.input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={() => {
                  setInput("");
                }}
                placeholder=""
              />
            </List.Accordion>
          </Text>
        </List.AccordionGroup>
        <Divider />
        <Divider />
        <List.AccordionGroup>
          <Text style={styles.esq}>
            <List.Accordion title="condições de utilização" id="2">
              <TextInput
                style={styles.input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={() => {
                  setInput("");
                }}
                placeholder=""
              />
            </List.Accordion>
          </Text>
        </List.AccordionGroup>
        <Divider />
        <Divider />
        
          <List.AccordionGroup>
            <Text style={styles.esq}>
              <List.Accordion title="setor de atividade" id="1">
                <CustomMultiPicker
                  options={setoratividade}
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
                  scrollViewHeight={1000}
                  checkmar={"yellow"}
                />
              </List.Accordion>
            </Text>
          </List.AccordionGroup>
      
        <View style={styles.headerFooterStyle}>
          <IconButton
            style={styles.iconbutton}
            icon="check-circle"
            color={"gray"}
           
            onPress={() => console.log("Pressed")}
          />
        </View>
      </View>
    </View> 
     </ScrollView>
     ) : (
      <Entrar_criar/>
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
  headerFooterStyle: {
    width: 700,
    marginTop: 500,
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
