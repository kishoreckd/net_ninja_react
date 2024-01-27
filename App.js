import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name , setName ]= useState('Jagadish')
  const [age , setAge ]= useState('30')
  const [person , setPerson ]= useState({name:'Iron man' ,age :21});

  const btnClick =()=>{
    setName('Mission')
    setPerson({name:'Tony', age:'22'})
  }
  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput placeholder='John Doe' style = {styles.input} onChangeText={(val)=> setName(val)}/>
      <Text>Enter Age:</Text>

      <TextInput placeholder='11' style = {styles.input} onChangeText={(val)=> setAge(val)}/> 
      <Text>Name :{name} , age :{age}</Text>
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
  input:{
    borderWidth : 1,
    borderColor:'#777',
    padding: 8,
    margin : 10,
    width :200
  
  
  },

});
