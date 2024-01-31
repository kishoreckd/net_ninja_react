import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet, Text, View , } from 'react-native';
import { globalStyle } from '../styles/global';


export default function ReviewDetails({route,navigation}) {
    const { title } = route.params;

    return (
      <View style={globalStyle.container}>
        <Text>{ title} </Text>
      </View>
    );
}

