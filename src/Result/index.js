import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function App(props) {
    
  
 return (
   <View style={styles.container}> 
      <Button
        title='Fechar'
        onPress={props.fechar}
      />
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'green'
  }
})