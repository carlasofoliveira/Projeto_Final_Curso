import React from "react";
import { render } from "react-dom";
import { StyleSheet, View, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  function navigateToMapa() {
    navigation.navigate("Mapa");
}
    return (
    <View style={styles.container}>
     <Button style={styles.button}title="ver Mapa"
    onPress= {()=>navigateToMapa()}
    />
    </View>
  );
};
  

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: "#EEF5FF",
    alignItems: "center",
    justifyContent: "center",
  },
  
});