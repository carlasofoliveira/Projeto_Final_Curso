import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import Notificacoes from "../screens/Notificacoes";
import Adicionar from "../screens/Adicionar";
import Splash from "../screens/Splash";
import tutorial from "../screens/tutorial";
import Login from "../screens/Login";


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headertextAlign: "center",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen options={{ headerShown: false }} name="tutorial" component={tutorial} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Notificacoes" component={Notificacoes} />
      <Stack.Screen name="Adicionar" component={Adicionar} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };*/
