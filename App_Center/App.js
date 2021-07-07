import "react-native-gesture-handler";
import React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Novo_Evento from "./adelementos/Novo_Evento";
import Nova_Entidade from "./adelementos/Nova_Entidade";
import Ideias from "./screens/Ideia";
import adicionar_Ideias from "./adelementos/Ideia";
import AdicionarLista from "./screens/Adicionar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Guardados from "./screens/Guardados";
import Notificacoes from "./screens/Notificacoes";
import adicionar_Iniciativas from "./adelementos/Iniciativa";
import adicionar_Recursos from "./adelementos/Recurso";
import Mapa from "./screens/Mapa";
import Participacao_individual from "./adelementos/Participacoes";
import Splash from "./screens/Splash";
import Tutorial from "./screens/tutorial";
import adicionar_Voluntarios from "./adelementos/Voluntario";
import setor_publico from "./adelementos/Setor_publico";
import setor_privado from "./adelementos/Setor_privado";
import terceiro_setor from "./adelementos/terceiro_setor";
import redes_entidades from "./adelementos/rede_entidades";
import checkmark_entidade from "./adelementos/checkmark_perfil";
import Pos_registo from "./adelementos/Registo_feito";
import detalhes_entidade from "./adelementos/detalhes_entidade";
import Entrar_criar from "./adelementos/Entrar_criar";
import Login from "./adelementos/Login";
import definicoes from "./adelementos/definicoes";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, TouchableOpacity, Image, StyleSheet } from "react-native";
import { IconButton, Colors } from "react-native-paper";
import SignUpView from "./adelementos/Criar_registo";
//import SimpleImagePicker from "./adelementos/SimpleImagePicker";
//import imagepickerground from "./adelementos/SimpleImagePicker";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  switch (routeName) {
    case "Inicio":
      return "";
    case "Ideia":
      return "Ideia";
    case "Adicionar":
      return "Adicionar";
    case "Guardados":
      return "Guardados";
    case "Notificacoes":
      return "Notificações";
    default:
      return "";
  }
}

function AdicionarTabNavigator({ navigation, route }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={Home}
        styles={{ backgroundColor: "#FFFFFF" }}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size}  />
          ),
        }}
      />
      <Tab.Screen
        name="Ideia"
        component={Ideias}
        options={{
          tabBarLabel: "ideia",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="lightbulb"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Adicionar"
        component={AdicionarLista}
        options={{
          tabBarLabel: "Adicionar",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Guardados"
        component={Guardados}
        options={{
          tabBarLabel: "Guardados",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bookmark"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notificacoes"
        component={Notificacoes}
        options={{
          tabBarLabel: "Notificações",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="entrar criar" component={Entrar_criar} />
    </Tab.Navigator>
  );
}

const App = () => {
  const navigationRef = React.useRef(null);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={AdicionarTabNavigator}
          options={{
            title: "Home",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: "#fff",
            
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
            headerRight: () => (
              <IconButton
                style={styles.definicoes}
                icon="cog-outline"
                color={Colors.white}
                size={20}
                onPress={() => navigationRef.current?.navigate("definicoes")}
              />
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigationRef.current?.navigate("Home")}>
                <Image
                  source={require("./assets/logotipo_appcenter.png")}
                  
                  style={styles.logoappcenter}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Iniciativas"
          component={adicionar_Iniciativas}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
            /*headerright:
              <Button
              title = "Test"
              onPress = {() => this.params.handleSave() } />*/
            
          }}
        />
        <Stack.Screen
          name="Adicionar"
          component={AdicionarLista}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigationRef.current?.navigate("Home")}>
                <Image
                  source={require("./assets/logotipo_appcenter.png")}
                  
                  style={styles.logoappcenter}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Novo evento"
          component={Novo_Evento}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
        <Stack.Screen
          name="Nova entidade"
          component={Nova_Entidade}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
        <Stack.Screen
          name="Participacao individual"
          component={Participacao_individual}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
        <Stack.Screen
          name="setor publico"
          component={setor_publico}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
        <Stack.Screen
          name="setor privado"
          component={setor_privado}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
        <Stack.Screen
          name="terceiro setor"
          component={terceiro_setor}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
        <Stack.Screen
          name="redes de entidades"
          component={redes_entidades}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />

        <Stack.Screen
          name="Voluntarios"
          component={adicionar_Voluntarios}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
        <Stack.Screen
          name="Novo Recurso"
          component={adicionar_Recursos}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
        <Stack.Screen
          name="Ideias"
          component={adicionar_Ideias}
          options={{
            headerTitleStyle: {
              color: "white",
 
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
        <Stack.Screen
          name="Check_mark"
          component={checkmark_entidade}
          options={{
            headerTitleStyle: {
              color: "white",
              alignSelf: 'center' 
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
        <Stack.Screen
          name="Pos registo"
          component={Pos_registo}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
        <Stack.Screen
          name="Mapa"
          component={Mapa}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
        <Stack.Screen
          name="mais detalhes"
          component={detalhes_entidade}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
        <Stack.Screen
          name="Entrar Criar"
          component={Entrar_criar}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
        <Stack.Screen
          name="Criar Registo"
          component={SignUpView}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
        <Stack.Screen
          name="definicoes"
          component={definicoes}
          options={{
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#4F81C7",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  settingsIcon: {
    height: 25,
    width: 22,
    marginRight: 7,
    marginTop: 25,
  },
  logoappcenter: {
    width: 105,
    height: 55,
    marginTop: 25,
    paddingRight:5,
    marginRight:5,
    marginLeft:-7,
  },
  
});

export default App;
