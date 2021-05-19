import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";

const list = [
  {
    title: "Iniciativa",
    component: "Iniciativas",
  },
  {
    title: "Evento",
    component: "Novo evento",
  },
  {
    title: "Entidade",
    component: "Nova entidade",
  },
  {
    title: "Voluntário",
    component: "Voluntarios",
  },
  {
    title: "Recurso",
    component: "Recursos",
  },
  {
    title: "Ideia",
    component: "Ideias",
  },
];
export default AdicionarLista = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {list.map((item, i) => (
        <ListItem
          key={i}
          bottomDivider
          style={{backgroundColor:'undefined'}}
          button
          onPress={() =>
            navigation.navigate(item.component)
          }
        >
          <ListItem.Content>
            <ListItem.Title style={styles.ListItem}>
              {item.title}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron style={styles.Chevron} />
        </ListItem>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF5FF",
    justifyContent: "center",
    paddingLeft: 6,
    paddingRight: 6,
  },
  content:{
    backgroundColor: "#EEF5FF",
  },
  ListItem: {
    color: "#345481",
  },
  back: {
    backgroundColor: "#EEF5FF",
  },
  Chevron: {
    tintColor: "#EEF5FF",
  },
});
