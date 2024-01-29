import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet, Text, View , } from 'react-native';


export default function ReviewDetails() {
    return (
        <View style ={styles.container}>
            <Text>Review Screen </Text>
        </View>
    )
}


const styles =StyleSheet.create({
    container:{
        padding:24,
    }
})