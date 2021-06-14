import React from "react";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";
import { StyleSheet, Text, View, Button, Header } from "react-native";
import Carousel from "simple-carousel-react-native";

export default function Home({navigation}) {

  
  return (
    <View style={styles.container}>
      
      <Text> Destaques</Text>
      <Button
        style={styles.button}
        title="ver Mapa"
        onPress={() => navigation.navigate("Mapa")}
      />

      <List.AccordionGroup style={styles.Accordion}>
        <Text style={styles.esq}>
          <List.Accordion title="Iniciativas" id="0">
            <Carousel color="#00FFFF" showScroll={true}>
              <View>
                <Text>Page 1</Text>
              </View>

              <View>
                <Text>Page 2</Text>
              </View>

              <View>
                <Text>Page 3</Text>
              </View>
            </Carousel>
          </List.Accordion>
        </Text>
        <Text style={styles.esq}>
          <List.Accordion title="Eventos" id="1">
            <Carousel color="#00FFFF" showScroll={true}>
              <View>
                <Text>Page 1</Text>
              </View>

              <View>
                <Text>Page 2</Text>
              </View>

              <View>
                <Text>Page 3</Text>
              </View>
            </Carousel>
          </List.Accordion>
        </Text>
        <Text style={styles.esq}>
          <List.Accordion title="Entidades" id="2">
            <Carousel color="#00FFFF" showScroll={true}>
              <View>
                <Text>Page 1</Text>
              </View>

              <View>
                <Text>Page 2</Text>
              </View>

              <View>
                <Text>Page 3</Text>
              </View>
            </Carousel>
          </List.Accordion>
        </Text>
        <Text style={styles.esq}>
          <List.Accordion title="Voluntários" id="3">
            <Carousel color="#00FFFF" showScroll={true}>
              <View>
                <Text>Page 1</Text>
              </View>

              <View>
                <Text>Page 2</Text>
              </View>

              <View>
                <Text>Page 3</Text>
              </View>
            </Carousel>
          </List.Accordion>
        </Text>

        <Text style={styles.esq}>
          <List.Accordion title="Recursos" id="4">
            <Carousel color="#00FFFF" showScroll={true}>
              <View>
                <Text>Page 1</Text>
              </View>

              <View>
                <Text>Page 2</Text>
              </View>

              <View>
                <Text>Page 3</Text>
              </View>
            </Carousel>
          </List.Accordion>
        </Text>
        <Text style={styles.esq}>
          <List.Accordion title="Ideias" id="5">
            <Carousel color="#00FFFF" showScroll={true}>
              <View>
                <Text>Page 1</Text>
              </View>

              <View>
                <Text>Page 2</Text>
              </View>

              <View>
                <Text>Page 3</Text>
              </View>
            </Carousel>
          </List.Accordion>
        </Text>
      </List.AccordionGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF5FF",
    paddingLeft: 6,
    paddingRight: 6,
    marginTop: 20,
  },
  content: {
    backgroundColor: "#EEF5FF",
  },
  ListItem: {
    color: "black",
  },
  preto: {
    color: "black",
  },
  back: {
    backgroundColor: "#EEF5FF",
  },
  Chevron: {
    tintColor: "#EEF5FF",
  },
  Text: {
    marginTop: 20,
  },
});