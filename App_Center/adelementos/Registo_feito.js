import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ListItem } from "react-native-elements";

const list = [
  {
    title: "mais detalhes",
    component: "mais detalhes",
  },
];

//import { Switch } from 'react-native-paper';

export default function Pos_registo({ navigation }) {
  return (
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
      <Text style={styles.textitlefirst}> Designação ou Nome * </Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={() => {
          setInput("");
        }}
        placeholder="inserir designação..."
      />
      <Text style={styles.textitlefirst}> TIPO DE ENTIDADE</Text>
      <View style={styles.container}>
        {list.map((item, i) => (
          <ListItem
            key={i}
            bottomDivider
            style={{ backgroundColor: 'undefined' }}
            button
            onPress={() => navigation.navigate(item.component)}
          >
            <ListItem.Content >
              <ListItem.Title style={styles.ListItem}>
                {item.title}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron style={styles.Chevron} />
          </ListItem>
        ))}
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
  SafeAreaView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
  },
  container1: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#ffffff",
    padding: 16,
  },
  textStyle: {
    marginTop: 10,
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 20,
    margin: 20,
  },
});
