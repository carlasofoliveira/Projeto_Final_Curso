import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Novo_Evento from "./adelementos/Novo_Evento";
import Nova_Entidade from "./adelementos/Nova_entidade";
import Ideias from "./screens/Ideia";
import adicionar_Ideias from "./adelementos/Ideia";
import AdicionarLista from "./screens/Adicionar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Guardados from "./screens/Guardados";
import Notificacoes from "./screens/Notificacoes";
import adicionar_Iniciativas from "./adelementos/Iniciativa";
import adicionar_Recursos from "./adelementos/Recurso";
import Mapa from './screens/Mapa';
import Participacao_individual from "./adelementos/Participacoes";
import Splash from "./screens/Splash";
import Tutorial from "./screens/tutorial";
import adicionar_Voluntarios from "./adelementos/Voluntario";
import setor_publico from "./adelementos/Setor_publico";
import setor_privado from "./adelementos/Setor_privado";
import terceiro_setor from "./adelementos/terceiro_setor";
import redes_entidades from "./adelementos/rede_entidades";
//import SimpleImagePicker from "./adelementos/SimpleImagePicker";
//import imagepickerground from "./adelementos/SimpleImagePicker";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function AdicionarTabNavigator (){
  return(
    <Tab.Navigator >
      <Tab.Screen name="Inicio" component={Home} styles={{ backgroundColor: '#FFFFFF'}} />
      <Tab.Screen  name="Ideia" component={Ideias} />
      <Tab.Screen name="Adicionar" component={AdicionarLista} />
      <Tab.Screen name="Guardados" component={Guardados} />
      <Tab.Screen name="Notificacoes" component={Notificacoes} />
    </Tab.Navigator>
   
    );
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={AdicionarTabNavigator} options={{
            title: 'Home',
            headerTitleStyle: {
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: '#4F81C7',
            },
          }} />
          <Stack.Screen name='Iniciativas' component={adicionar_Iniciativas} options={{
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#4F81C7',
            },
          }}/>
        <Stack.Screen name='Novo evento' component={Novo_Evento} options={{
           headerTitleStyle: {
            color: 'white',
          },
            headerStyle: {
              backgroundColor: '#4F81C7',
            },
          }} />
        <Stack.Screen name='Nova entidade' component={Nova_Entidade} options={{
          headerTitleStyle: {
            color: 'white',
          },
            headerStyle: {
              backgroundColor: '#4F81C7',
            },
          }}/>
        <Stack.Screen name='Participacao individual' component={Participacao_individual}options={{
          headerTitleStyle: {
            color: 'white',
          },
            headerStyle: {
              backgroundColor: '#4F81C7',
            },
          }} />
          <Stack.Screen name='setor publico' component={setor_publico}options={{
          headerTitleStyle: {
            color: 'white',
          },
            headerStyle: {
              backgroundColor: '#4F81C7',
            },
          }} />
           <Stack.Screen name='setor privado' component={setor_privado}options={{
          headerTitleStyle: {
            color: 'white',
          },
            headerStyle: {
              backgroundColor: '#4F81C7',
            },
          }} />
           <Stack.Screen name='terceiro setor' component={terceiro_setor}options={{
          headerTitleStyle: {
            color: 'white',
          },
            headerStyle: {
              backgroundColor: '#4F81C7',
            },
          }} />
          <Stack.Screen name='redes de entidades' component={redes_entidades}options={{
          headerTitleStyle: {
            color: 'white',
          },
            headerStyle: {
              backgroundColor: '#4F81C7',
            },
          }} />

           <Stack.Screen name='Voluntarios' component={adicionar_Voluntarios} options={{
             headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#4F81C7',
            },
          }}/>
           <Stack.Screen name='Recursos' component={adicionar_Recursos} options={{
             headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#4F81C7',
            },
          }}/>
           <Stack.Screen name='Ideias' component={adicionar_Ideias} options={{
             headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: '#4F81C7',
            },
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
    /*<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>*/
  );
};
export default App;

/*export default class SplashScreen extends Component {
  render() {
    return (
      <SplashScreenMask
        imageSource={IMAGE}
        navigationAction={() => this.props.navigation.navigate("Auth")}
        backgroundStyle={styles.backgroundStyle}
        duration={1000}
      />
    );
  }
}*/

/*const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#fff",
  },
});*/
