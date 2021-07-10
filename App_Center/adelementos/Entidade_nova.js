import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { isLoggedIn } from "../adelementos/API_Calls";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ListItem } from "react-native-elements";
import { ScrollView,  ActivityIndicator, } from "react-native";
import Entrar_criar from "../adelementos/Entrar_criar";



const list = [
  {
    title: "participação individual",
    component: "Participacao individual",
  },
  {
    title: "Setor Público",
    component: "setor publico",
  },
  {
    title: "Setor Privado",
    component: "setor privado",
  },
  {
    title: "terceiro setor",
    component: "terceiro setor",
  },
  {
    title: "rede de entidades",
    component: "rede de entidades",
  },
];


export default function Nova_Entidade({ navigation }) {
  const [input, setInput] = React.useState("");

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
      <Text style={styles.textitlefirst}> Designação* </Text>
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
        <Text style={styles.texttitlesecond}> Tipo de Edentidade* </Text>
        {list.map((item, i) => (
          <ListItem 
          containerStyle={{backgroundColor:"#EEF5FF"}}
            key={i}
            bottomDivider
            button
            chevron={{color:'red'}}
            onPress={() => navigation.navigate(item.component)}
          >
            <ListItem.Title style={{color:"#345481"}}>
              {item.title}
            </ListItem.Title>
            <ListItem.Chevron />
          </ListItem>
        ))}
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
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 6,
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
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 10,
    marginTop: 25,
    marginLeft: 0,
  },
  texttitlesecond: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
    marginTop: 25,
    marginLeft: 9,
  },
  input: {
    backgroundColor: "white",
    fontSize: 16,
    fontStyle: "normal",
    width: 350,
    borderWidth: 1,
    borderRadius: 12,
    padding: 1,
    paddingLeft: 30,
    marginTop: -5,
    marginRight: 30,
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
  scroll:{
    backgroundColor: "#EEF5FF",
  },
 
});