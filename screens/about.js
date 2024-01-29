import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet, Text, View , } from 'react-native';
import { globalStyle } from '../styles/global';


export default function About() {
    return (
        <View style ={globalStyle.container}>
            <Text>About </Text>
        </View>
    )
}


