import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  Button, FlatList, StyleSheet, Text, TouchableOpacity, View , } from 'react-native';
import { globalStyle } from '../styles/global';


export default function Home({navigation}) {
    const [reviews , setReviews] = useState([
        {title:'Breath of air' ,rating:5,body:'lorem',key:1},
        {title:'Breath of water' ,rating:3,body:'lorem',key:2},
        {title:'Breath of lungs' ,rating:2,body:'lorem',key:3},
    ])

    return (

        <View>
            <FlatList
            data={ reviews}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails', { title: item.title })}>
                    <Text style={globalStyle.tittleText}>{item.title}</Text>
                </TouchableOpacity>
            )}
            />

        </View>
    //     <View style ={globalStyle.container}>
    //         <Text style={globalStyle.tittleText}>Home Screen </Text>
    //         <Button
    //     title="Go to Details"
    //     onPress={() => navigation.navigate('Details')}
    //   />
    //     </View>
    )
}


