import React,  { useEffect, useState} from "react";
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
import { destaquesevento } from "../adelementos/API_Calls";

export default function Home({ navigation }) {
  const [Designacaoevento, setDesignacaoevento] = useState(null);
  const [Descricaoevento, setDescricaoevento] = useState(null);
  const [Localevento, setLocalevento] = useState(false);
  const [Datatimeevento, setDatatimeevento] = useState(false);
  


  useEffect(() => {
    //console.log("email: ", GLOBAL.EMAIL);

      destaquesevento().then((destaquesevento) => {
      console.log("destaquesevento", destaquesevento);
      });
    
  }, []);

  return (
    <View style={styles.container}>
    <ScrollView style={styles.ScrollView} marginLeft={20}>
      <View marginLeft={125} marginRight={125}>
        <Button
          backgroundColor={"#4F81C7"}
          style={styles.buttonmap}
          title="ver Mapa"
          onPress={() => navigation.navigate("Mapa")}
        />
      </View>
      <View marginTop={15}>
        <Carousel showBubbles={false} width={350} height={300}>
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
            <Carousel
              showBubbles={false}
              borderRadius={100}
              width={350}
              height={300}
              borderRadius={25}
            >
              <View style={styles.fundcarrosel}>
                <Image
                  style={styles.tam}
                  source={require("../pic/evento.jpg")}
                />
                <Button
                  style={styles.null}
                  title="Empreendedorismo +"
                  onPress={() => navigation.navigate("Iniciativa1")}
                />
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
            <Carousel showBubbles={false} width={350} height={300}>
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
            <Carousel showBubbles={false} width={350} height={300}>
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
            <Carousel showBubbles={false} width={350} height={300}>
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
            <Carousel showBubbles={false} width={350} height={300}>
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
          <List.Accordion title="Destaques" id="5">
            <Carousel showBubbles={false} width={350} height={300}>
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
  marginTop:5,
 
},
ScrollView:{
  backgroundColor: "#EEF5FF",
}, 
buttonmap: {
  backgroundColor: "#345481",
  marginBottom: 100,
  borderRadius: 50,
  marginTop:10,
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
  marginTop: 0,
  width: 350,
  height: 200,
  borderRadius: 10,
},
esp: {
  marginTop: 15,
  marginRight: 20,
  paddingRight: 20,
  marginBottom: 0,
  color: "black",
},

titulo: {
  fontSize: 20,
  marginTop: 20,
  marginLeft: 10,
  color: "black",
},
redondo: {
  borderRadius: 50,
  marginLeft: 15,
},
titulo1: {
  marginTop: 20,
  marginBottom: 10,
  fontSize: 16,
  color: "black",
},
});