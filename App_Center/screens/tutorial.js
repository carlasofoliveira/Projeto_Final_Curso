// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Intro slider with Custom Buttons

// import React in our code
import React, { useState } from "react";
import { Avatar, ListItem } from "react-native-elements";

import IMAGE from "../assets/mapa_imagem.png";
// import all the components we are going to use
import { StyleSheet, View, Text, Button } from "react-native";
//import AppIntroSlider to use it
import AppIntroSlider from "react-native-app-intro-slider";

//import AppIntroSlider to use it
import Icon from "react-native-ionicons";

const Tutorial = ({ navigation }) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Button
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: "black" }}
        />
      </View>
    );
  };

  const RenderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-checkmark"
          size={24}
          style={{ backgroundColor: "black" }}
        />
      </View>
    );
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 50,
        }}
      >
        <Avatar
          source={item.Avatar}
          width={200}
          height={200}
          style={styles.espace}
        />
        <Text style={styles.introTitleStyle} marginTop={0}>
          {item.title}
        </Text>
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        navigation.navigate("Home")
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          renderDoneButton={RenderDoneButton}
          renderNextButtonClick={RenderNextButton}
          showSkipButton={true}
          onSkip={onSkip}
          dotClickEnabled={false}
          dotStyle={styles.dotcolor}
          activeDotStyle={styles.dotcolor}
        />
      )}
    </>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#97C2FF",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 37.5,
    color: "#345481",
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  introTextStyle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingVertical: 50,
    marginTop: 150,
    paddingLeft: 10,
    paddingRight: 10,
  },
  introTitleStyle: {
    fontSize: 40,
    color: "#345481",
    textAlign: "center",
    marginTop: 0,
    marginBottom: 16,
    fontWeight: "bold",
    top: 346,
    width: 291,
    paddingVertical: 30,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  dotcolor: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  espace: {
    marginTop: 100,
    marginBottom: -350,
  },
});

const slides = [
  {
    key: "s1",

    text: "A app CeNTER visa mediar a partilha de informação e o conhecimento mútuo sobre entidades, iniciativas, eventos, voluntários e recursos, como contributo para estimular a inovação de base territorial, na região Centro de Portugal.",
    Avatar: require("../assets/logo1.png"),
    backgroundColor: "#97C2FF",
  },

  {
    key: "s3",
    title: "Explorar no mapa",
    text: "Encontrar e filtrar sugestões no mapa.",
    Avatar: require("../assets/mapa_imagem.png"),
    backgroundColor: "#97C2FF",
  },
  {
    key: "s4",
    title: "Interagir com sugestões",
    text: "Arrastar cartões para guardar, editar ou pedir para receber notificações.",
    Avatar: require("../assets/interagir.png"),
    backgroundColor: "#97C2FF",
  },
  {
    key: "s5",
    title: "Partilhar ideias",
    text: "Partilhar e concretizar ideias com outros utilizadores.",
    Avatar: require("../assets/ideias.png"),
    backgroundColor: "#97C2FF",
  },
];