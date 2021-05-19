import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput  } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';



export default function adicionar_Voluntarios() {
  const [input, setInput] =React.useState("") 
  
  return (
    <View style={StyleSheet.container}>
      <View style={StyleSheet.Imageinsert}>
        <LinearGradient 
      colors={['red', 'yellow']} 
      start={{
        x: 0,
        y: 0
      }}
      end={{
        x: 1,
        y: 1
      }}
      style={styles.box} />

      
      </View>
      <Text style={styles.textitle}> Designação ou Nome* </Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} onChangeText={(text) => setInput(text)}
      onSubmitEditing={() =>{
        setInput("");
      }}
      placeholder="inserir designação..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF5FF",
    alignItems: "center",
    justifyContent: "center",
  },
  Imageinsert:{
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  box: {
    width: '100%',
    height: 200,
  },
  button: {
    marginTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 40,
    paddingRight: 60,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
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
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginTop:5,
    marginLeft:25,
  },
  
 
});
