import React, { useState, useEffect } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";
import { List, IconButton } from "react-native-paper";
import CustomMultiPicker from "react-native-multiple-select-list";
import { ScrollView } from "react-native-gesture-handler";
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';




const entidadesprivadas = {
  1: "empresa",
  2: "associação empresarial",
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

export default function setor_privado() {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const alternarSwitch1 = () => {
    setIsEnabled1((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <CustomMultiPicker
              options={entidadesprivadas}
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
              checkmar={"yellow"}
            />
          </View>
        </View>
        <List.AccordionGroup s>
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
                scrollViewHeight={500}
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
            onPress={() => console.log("Pressed")}
          />
    
   </View>
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
    marginRight:15,
    backgroundColor: "white",
    
  },
  iconbutton: {
    marginLeft:150,
    marginTop:-10,
  },
});
