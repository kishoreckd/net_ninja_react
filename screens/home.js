import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  Button, StyleSheet, Text, View , } from 'react-native';
import { globalStyle } from '../styles/global';


export default function Home({navigation}) {
    return (
        <View style ={globalStyle.container}>
            <Text style={globalStyle.tittleText}>Home Screen </Text>
            <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
        </View>
    )
}


