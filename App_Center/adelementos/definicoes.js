import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ListItem } from "react-native-elements";
import { ScrollView } from "react-native";
import {  Divider, } from "react-native-paper";


const list = [
  {
    title: "criados por mim",
    component: "criados por mim",
  },
  {
    title: "minhas participações",
    component: "minhas participacoes",
  },
  {
    title: "preferências",
    component: "preferencias",
  },
  {
    title: "ajuda",
    component: "ajuda",
  },
];
export default function Nova_Entidade({ navigation }) {
  const [input, setInput] = React.useState("");

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.backgroundimage}>
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
      <Text style={styles.Nomepessoa}>
        Nome da pessoa
      </Text>
        </View>
      
      <Divider style={styles.divider} />
        <Divider />
      <View>
        {list.map((item, i) => (
          <ListItem 
          containerStyle={{backgroundColor:"#EEF5FF"}}
            key={i}
            bottomDivider
            button
            onPress={() => navigation.navigate(item.component)}
          >
            <ListItem.Title style={styles.listitem} >
              {item.title}
            </ListItem.Title>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </View>
    </View>
    </ScrollView>
    
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
    marginLeft:11,
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
  divider:{
marginTop:65,
  },
  backgroundimage:{
    backgroundColor:"#4F81C7",
    paddingBottom:57,
    marginRight:-7,
    marginLeft:-10,
  },
  Nomepessoa:{
    color:"#FFFFFF",
    marginLeft:104,
    marginTop:20,
  }, 
  listitem:{
color:"#345481",
  },
});
