import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'


export default function TodoItem({item,presshandler}) {
 return(
    <TouchableOpacity onPress={()=>presshandler(item.key)}>
        <View style ={styles.item}>
            <MaterialIcons name='delete' size={18} color='#333' />
            <Text style={styles.itemText}>{item.text}</Text>
        </View>
    </TouchableOpacity>
 )
}
// Todo

const styles = StyleSheet.create({

    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    },
    itemText:{
        marginLeft:10
    }
})