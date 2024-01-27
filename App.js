import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name , setName ]= useState('Jagadish')
  const [person , setPerson ]= useState({name:'Iron man' ,age :21});

  const btnClick =()=>{
    setName('Mission')
    setPerson({name:'Tony', age:'22'})
  }
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style ={styles.buttonContainer}>
        <Button title='Update State' onPress={btnClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headers:{
    backgroundColor:'pink', alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  boldText: {
    flex: 1,
    color:'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
