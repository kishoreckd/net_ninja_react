import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet, Text, View , } from 'react-native';
import { globalStyle } from '../styles/global';


export default function Home() {
    return (
        <View style ={globalStyle.container}>
            <Text style={globalStyle.tittleText}>Home Screen </Text>
        </View>
    )
}


