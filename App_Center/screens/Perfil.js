import React from "react";
import { View, StyleSheet } from "react-native";
import {ListItem} from 'react-native-elements';

const list=[
    {
        title: 'criados por mim',
    },
    {
        title: 'minhas participacoes',
    }
    ]
const Perfil = () => {
  return (
    <View style={{
        
         backgroundColor:"red",
         flex: -6.5,
    }}>
    <View>
    {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
    </View>
    </View>
    
  );
};



const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

    
  },
});

export default Perfil;