import React from "react";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";
import Carousel from "simple-carousel-react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
      <Button
          style={styles.buttonmap}
          title="ver Mapa"
          onPress={() => navigation.navigate("Mapa")}
        />
        <View>
          <Carousel showBubbles={false} style={styles.tamcarrossel}>
            <View style={styles.fundcarrosel}>
              <Image style={styles.tam} source={require("../pic/evento.jpg")} />
              <Text style={{ alignSelf: "flex-start" }} style={styles.titulo}>
                Bailarico do bairro
              </Text>
              <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                Aveiro
              </Text>
              <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                10 Maio
              </Text>
            </View>
            <View style={styles.fundcarrosel}>
              <Image style={styles.tam} source={require("../pic/evento.jpg")} />
              <Text style={{ alignSelf: "flex-start" }} style={styles.titulo}>
                Bailarico do bairro
              </Text>
              <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                Aveiro
              </Text>
              <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                10 Maio
              </Text>
            </View>

            <View style={styles.fundcarrosel}>
              <Image style={styles.tam} source={require("../pic/evento.jpg")} />
              <Text style={{ alignSelf: "flex-start" }} style={styles.titulo}>
                Bailarico do bairro
              </Text>
              <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                Aveiro
              </Text>
              <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                10 Maio
              </Text>
            </View>
          </Carousel>
        </View>
        

        <List.AccordionGroup style={styles.Accordion}>
          <Text style={styles.content}>
            <List.Accordion title="Iniciativas" id="0">
              <Carousel showBubbles={false} style={styles.tamcarrossel}>
                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>
                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>

                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>
              </Carousel>
            </List.Accordion>
          </Text>
          <Text style={styles.content}>
            <List.Accordion title="Eventos" id="1">
              <Carousel showBubbles={false} style={styles.tamcarrossel}>
                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>
                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>

                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>
              </Carousel>
            </List.Accordion>
          </Text>
          <Text style={styles.content}>
            <List.Accordion title="Entidades" id="2">
              <Carousel showBubbles={false} style={styles.tamcarrossel}>
                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>
                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>

                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>
              </Carousel>
            </List.Accordion>
          </Text>
          <Text style={styles.content}>
            <List.Accordion title="Voluntários" id="3">
              <Carousel showBubbles={false} style={styles.tamcarrossel}>
                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>
                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>

                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>
              </Carousel>
            </List.Accordion>
          </Text>

          <Text style={styles.content}>
            <List.Accordion title="Recursos" id="4">
              <Carousel showBubbles={false} style={styles.tamcarrossel}>
                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>
                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>

                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>
              </Carousel>
            </List.Accordion>
          </Text>
          <Text style={styles.content}>
            <List.Accordion title="Ideias" id="5">
              <Carousel showBubbles={false} style={styles.tamcarrossel}>
                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>
                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>

                <View style={styles.fundcarrosel}>
                  <Image
                    style={styles.tam}
                    source={require("../pic/evento.jpg")}
                  />
                  <Text
                    style={{ alignSelf: "flex-start" }}
                    style={styles.titulo}
                  >
                    Bailarico do bairro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    Aveiro
                  </Text>
                  <Text style={styles.esp} style={{ alignSelf: "flex-end" }}>
                    10 Maio
                  </Text>
                </View>
              </Carousel>
            </List.Accordion>
          </Text>
        </List.AccordionGroup>
      </ScrollView>
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
  tam: {
    marginTop: 9,
    width: 350,
    height: 200,
    borderRadius: 10,
   
  },
  esp: {
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 0,
    color: "black",
  },

  fundcarrosel: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  titulo: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    color: "black",
  },
  
  buttonmap: {
    paddingRight:55,
    marginTop:5,
    height:5,
  },
});
