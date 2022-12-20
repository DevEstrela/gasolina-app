import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App(props) {
    const [result, setResult] = useState('Álcool')



  
 return (
   <View style={styles.container}> 

        <View style={styles.containerImage} >
            <Image
                source={require('../image/gas.png')}
            />
        </View>

        <Text style={styles.title}>Compensa usar {result}</Text>

        <View style={styles.containerForm}>
            <Text style={styles.titleForm}>Com os preços: </Text>
            <Text style={styles.text}>Álcool: R$ {props.alcool}</Text>
            <Text style={[styles.text, {marginBottom: 25}]}>Gasolina: R$ {props.gasolina}</Text>

            <TouchableOpacity style={styles.areaButton} onPress={ props.fechar }>
                <Text style={styles.textButton}>Calcular novamente</Text>
            </TouchableOpacity>
        </View>





      
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
    color: 'green',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 45
  },
  containerForm:{
    alignItems: 'center'
  },
  titleForm:{
    color: '#FFF',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  text:{
    color: '#FFF',
  },
  areaButton:{
    borderWidth: 1,
    borderColor: '#fb4848',
    width: '55%',
    height: '14%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton:{
    color: '#fb4848',
    fontWeight: 'bold',
    fontSize: 15
  }
})