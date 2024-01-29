import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , ScrollView,FlatList , TouchableOpacity} from 'react-native';



export default function TodoItem({item,presshandler}) {
 return(
    <TouchableOpacity onPress={()=>presshandler(item.key)}>
    <Text style ={styles.item}>{item.text}</Text>
    </TouchableOpacity>
 )
}


const styles = StyleSheet.create({

    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
})