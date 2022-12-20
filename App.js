import React, {useState} from 'react';
import { View, Text, StyleSheet, Modal, Button, Image } from 'react-native';

import Result from './src/Result'

export default function App() {
  const [alcool, setAlcool] = useState('');    //variavel para armazenar entrada do input alcool
  const [gasolina, setGasolina] = useState('');   //variavel para armazenar entrada do input gasolina

  const [modalVisible, setModalVisible] = useState(false);    //Variavel para controlar a abertura e fechamento do modal

  function fecharModal(){
    setModalVisible(false)
  }

 return (
   <View style={styles.container}> 

























{/* 
      <Button  title='Abrir modal' onPress={ () => setModalVisible(true) } />

      <Modal transparent={false} visible={modalVisible} animationType="slide">
        <Result fechar={ fecharModal }/>
      </Modal> */}
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})