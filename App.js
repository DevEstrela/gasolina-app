import React, {useState} from 'react';
import { View, Text, StyleSheet, Modal, Button, Image, TextInput, TouchableOpacity } from 'react-native';

import Result from './src/Result'

export default function App() {
  const [alcool, setAlcool] = useState('');    //variavel para armazenar entrada do input alcool
  const [gasolina, setGasolina] = useState('');   //variavel para armazenar entrada do input gasolina

  const [modalVisible, setModalVisible] = useState(false);    //Variavel para controlar a abertura e fechamento do modal

  function fecharModal(){
    setModalVisible(false)
  }
  function zeraCampo(){
    setAlcool('');
    setGasolina('')
  }

  function calcular(){
  
    if(alcool === ''){
      alert('ERROR: Digite o preço do álcool.')
      return;
    }                                                 //Validação de campo vazio
    if(gasolina === ''){
      alert('ERROR: Digite o preço do gasolina.')
      return;
    }

    setModalVisible(true)  //Abre o modal
  }

 return (
   <View style={styles.container}> 

      <View style={styles.containerImage} >
        <Image
            source={require('./src/image/logo.png')}
        />
      </View>

        <Text style={styles.title}>
          Qual melhor opção?
        </Text>

      <View style={styles.containerForm}>
        <Text style={styles.text}>Álcool (preço por litro):</Text>
        <TextInput
          style={[styles.input, {marginBottom: 15}]}
          keyboardType='numeric'
          placeholder='Ex: 3.60'
          value={alcool}
          onChangeText={ (text) => setAlcool(text) }
        />


        <Text style={styles.text} >Gasolina (preço por litro):</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='Ex: 4.20'
          value={gasolina}
          onChangeText={ (text) => setGasolina(text) }
        />

        <TouchableOpacity style={styles.button} onPress={calcular}>
          <Text style={styles.textBtn}>Calcular</Text>
        </TouchableOpacity>
      </View>
        
      <Modal transparent={false} visible={modalVisible} animationType="slide">
        <Result zera={zeraCampo} gas={gasolina} alc={alcool} fechar={ fecharModal }/>
      </Modal> 
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#121212'
  },
  containerImage:{
    marginTop: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  title:{
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 45
  },
  containerForm:{
    margin: 15
  },
  text:{
    color: '#FFF',
    fontWeight: 'bold'
  },
  input:{
    borderWidth: 1,
    backgroundColor: '#FFF',
    padding: 5,
    borderRadius: 5
  },
  button:{
    width: '100%',
    height: '16%',
    backgroundColor: '#fb4848',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  textBtn:{
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold'
  }
})