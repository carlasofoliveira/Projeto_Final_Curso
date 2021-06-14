/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import adicionar_Iniciativas from '../adelementos/Iniciativa';
import AdicionarLista from "../screens/Adicionar";
import Guardados from "../screens/Guardados";
import Notificacoes from "../screens/Notificacoes";
import Novo_Evento from "../adelementos/Novo_Evento";

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

const IniciativasStack = createStackNavigator();
const IniciativasStackScreen = () => (
  <IniciativasStack.Navigator>
    <IniciativasStack.Screen name="Iniciativas" component={adicionar_Iniciativas} />
   
  </IniciativasStack.Navigator>
);
const AdicionarStack = createStackNavigator();
const AdicionarStackScreen = () => (
  <AdicionarStack.Navigator>
    <AdicionarStack.Screen name="Adicionar" component={AdicionarLista} />
    <AdicionarStack.Screen name="Novo_Evento" component={Novo_Evento} /> 
  </AdicionarStack.Navigator>
);
const GuardadosStack = createStackNavigator();
const GuardadosStackScreen = () => (
  <GuardadosStack.Navigator>
    <GuardadosStack.Screen  name="Guardados" component={Guardados} />
  </GuardadosStack.Navigator>
);
const NotificacoesStack = createStackNavigator();
const NotificacoesStackScreen = () => (
  <NotificacoesStack.Navigator>
    <NotificacoesStack.Screen name="Notificacoes" component={Notificacoes} />
  </NotificacoesStack.Navigator>
);


 
const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen  name="Home" component={HomeStackScreen} />
    <AppTabs.Screen name="Iniciativas" component={IniciativasStackScreen} />
    <AppTabs.Screen name="Adicionar" component={AdicionarStackScreen} />
    <AppTabs.Screen name="Guardados" component={GuardadosStackScreen} />
    <AppTabs.Screen name="Notificacoes" component={NotificacoesStackScreen} />
  </AppTabs.Navigator>
);
export default () => (
  <NavigationContainer>
     <AppTabsScreen />
  </NavigationContainer>
);*/