

import React from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import HomeAvaliador from './src/components/Avaliador/HomeAvaliador';
import ListarFato from './src/components/Avaliador/ListarFato';
import CadastrarFatoObservado from './src/components/Avaliador/CadastrarFatoObservado';
import CadastroAvaliador from './src/components/Avaliador/CadastroAvaliador';

import HomeAvaliado from './src/components/Avaliados/HomeAvaliado';
import CadastroAvaliado from './src/components/Avaliados/CadastroAvaliado';
import FichaAvaliacao from './src/components/Avaliados/FichaAvaliacao';
import ListarFatoAvaliado from './src/components/Avaliados/ListarFatoAvaliado';


import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login';

// <Drawer.Screen name="Login" component={Login} />

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Conecte-se" component={Login} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#fff',
                 
        }}
        >
      
        <Drawer.Screen name="Home Avaliador" component={HomeAvaliador} />
        <Drawer.Screen name="Cadastro" component={CadastroAvaliador} />
        <Drawer.Screen name="Cadastrar Fato Observado" component={CadastrarFatoObservado} />
        <Drawer.Screen name="Listar Fatos Observados" component={ListarFato} />

        <Drawer.Screen name="Home Avaliado" component={HomeAvaliado} />
        <Drawer.Screen name="Cadastro Avaliado" component={CadastroAvaliado} />
        <Drawer.Screen name="Ficha de Avaliação" component={FichaAvaliacao} />
        <Drawer.Screen name="Listar Fatos Observados Avaliado" component={ListarFatoAvaliado} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

*/
export default class App extends React.Component {
  render() {
    return <MyStack/>;
  }  

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  
});




/*
export default function App() {
  return <Routes />
    /*<View style={styles.container}>
      <Text>Habitus</Text>
    </View>
    
  ); 
}
*/