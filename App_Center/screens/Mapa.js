import React, { useState, useEffect, useRef } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { View, Text, StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Carousel from "simple-carousel-react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { NavigationContainer } from "@react-navigation/native";

const Mapa = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    (async function () {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        setOrigin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } else {
        throw new Error("Location permission not granted");
      }
    })();
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={origin}
        showsUserLocation={true}
        loadingEnabled={true}
      ></MapView>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: "100%",
    width: "100%",
  },

  positonBox: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: -350,
    marginLeft: 0,
    paddingRight: 0,
    paddingLeft: 0,
  },

  pic: {
    borderRadius: 10,
    margin: 0,
    padding: 0,
    marginRight: 0,
    marginLeft: 5,
  },
  esp: {
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 0,
    color: "black",
  },

  fundcarrosel: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  titulo: {
    fontSize: 20,

    marginLeft: 10,
    color: "black",
  },
});
export default Mapa;
