import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , } from 'react-native';
import Home from './screens/home';


export default function App() {

 

  return (
   <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // paddingTop:40,
    // paddingHorizontal:20
  },
  
});
