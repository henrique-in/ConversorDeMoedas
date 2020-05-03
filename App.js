import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal} from 'react-native';

import Conversor from './src/Conversor';



class App extends Component{
  render(){
    return(

      <View style={styles.corpo}>

      <View style={styles.topo}>
        <Text style={styles.titulo}> Conversor de Moedas </Text>
      </View>
      
      <View style={styles.container}> 
      
        <Conversor moedaA= "USD" moedaB= "BRL"/>
        <Conversor moedaA= "EUR" moedaB= "BRL"/>
      </View>

      </View>  
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  corpo:{
    flex:1
  },
  topo:{
    backgroundColor: 'red',
    height: 50, 
    elevation: 10
  },
  titulo:{
    color:'#FFF',
    fontWeight:'bold',
    textAlign: 'center',
    fontSize: 20,
    padding: 10
  }
});

export default App;