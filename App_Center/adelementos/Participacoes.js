import React, { useState, useEffect } from "react";
import { Text, View, Switch, StyleSheet, Button } from "react-native";
import { List, IconButton, Colors } from "react-native-paper";
import CustomMultiPicker from "react-native-multiple-select-list";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";
import { StatusBar } from "expo-status-bar";
import GLOBAL from "../global";

import { makeRegistration } from "../adelementos/API_Calls";



const registar = {
  1: "registar-me como voluntário",
};
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
const areasinteresse = {
  1: "Cultura e Turismo",
  2: "Saúde e Bem-Estar",
  3: "Ação Cívica",
  4: "Ação Social",
  5: "Ambiente e Património",
  6: "Atividade física e desportiva",
  7: "Tecnologia",
  8: "Secretariado, Administração ou Gestão",
  9: "Campanhas de Divulgação",
  10: "Angariação de Fundos",
  11: "Geral",
};




export default function Participacao_individual() {
  const [Registar, setRegistar] = useState(null);
  const [Setoratividade, setSetoratividade] = useState(null);
  const [Areasinteresse, setAreasinteresse] = useState(null);


  const [isEnabled1, setIsEnabled1] = useState(false);
  const alternarSwitch1 = () => {
    setIsEnabled1((previousState) => !previousState);
  };
  const [input, setInput] = React.useState("");


  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }


  onClickListenerParticipacoes = (viewId) => {
    //Alert.alert("Alert", "Button pressed "+viewId);
    GLOBAL.registar = getKeyByValue(registar, Registar[1]);
    GLOBAL.setoratividade = getKeyByValue(setoratividade, Setoratividade[1]);
    GLOBAL.areainteresse = getKeyByValue(areasinteresse, Areasinteresse[1]);
  };



  return (
    <ScrollView style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <CustomMultiPicker
              options={registar}
              search={false} // should show search bar?
              multiple={true} //
              returnValue={"label"} // label or value
              callback={(registo) => {
                setRegistar(registo);
              }} // callback, array of selected items
              rowBackgroundColor={"#97C2FF"}
              rowHeight={36}
              rowRadius={11.55}
              iconColor={"blue"}
              iconSize={30}
              selectedIconName={"ios-checkmark-circle-outline"}
              unselectedIconName={"ios-radio-button-off-outline"}
              selected={"none"} // list of options which are selected by default
              checkmar={"yellow"}
            />
          </View>
          <View style={({ marginBottom: 28 }, { marginRight: 30 })}>
            <View style={{ width: 270 }}>
              <Text style={{ fontSize: 15, marginTop: 25, left: 18 }}>
                {
                  "Encontro-me disponível para fazer voluntariado com regularidade"
                }
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
        </View>

        <List.AccordionGroup>
          <Text style={styles.esq}>
            <List.Accordion title="setor de atividade" id="1">
              <CustomMultiPicker
                options={setoratividade}
                search={false} // should show search bar?
                multiple={true} //
                returnValue={"label"} // label or value
                callback={(setor) => {
                  setSetoratividade(setor);
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
          <Text style={styles.esq}>
            <List.Accordion title="áreas de interesse" id="2">
              <CustomMultiPicker
                options={areasinteresse}
                search={false} // should show search bar?
                multiple={true} //
                returnValue={"label"} // label or value
                callback={(area) => {
                  setAreasinteresse(area);
                }} // callback, array of selected items
                rowBackgroundColor={"#97C2FF"}
                rowHeight={30}
                rowRadius={11.55}
                iconColor={"blue"}
                iconSize={30}
                selectedIconName={"ios-checkmark-circle-outline"}
                unselectedIconName={"ios-radio-button-off-outline"}
                selected={"none"} // list of options which are selected by
                scrollViewHeight={1000}
                checkmar={"yellow"}
              />
            </List.Accordion>
          </Text>
        </List.AccordionGroup>
      </ScrollView>
      <View style={styles.headerFooterStyle}>
        <IconButton
          style={styles.iconbutton}
          icon="check-circle"
          color={"gray"}
          size={45}
          onPress={() => onClickListenerParticipacoes("")}
        />
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
  esq: {
    textAlign: "left",
    paddingRight:150,
  },
  scroll: {
    backgroundColor: "#EEF5FF",
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
  textitle:{
    fontSize:25,
    fontWeight:"bold",
    color:"gray",
   marginTop:25,
   marginLeft:25,
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
  checkboxContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  headerFooterStyle: {
    width:700,
    marginTop:400,
    height: 51,
    marginLeft:-9,
    backgroundColor: "white",
  },
  iconbutton: {
    marginLeft:150,
    marginTop:-15,
    position: 'absolute',
  },
})