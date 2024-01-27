import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , ScrollView,FlatList } from 'react-native';

export default function App() {
  
const [people , setPeople] = useState ([

  {name:'Kishore' ,id:'1'} ,
  {name:'Akash' ,id:'2'} ,
  {name:'Jeeva' ,id:'3'} ,
  {name:'Dhanush' ,id:'4'} ,
  {name:'Bala' ,id:'5'} ,
  {name:'Bharat' ,id:'6'} ,
  {name:'dkjhsidw' ,id:'7'} ,
  {name:'jiihih' ,id:'8'} ,
  {name:'hikhihi' ,id:'9'} ,
  {name:'gfeifeg' ,id:'10'} ,
  {name:'hikhdeiuhiihi' ,id:'11'} ,
]);
  return (
    <View style={styles.container}>

      <FlatList data={people}
      numColumns={2}
      keyExtractor={ (item) => item.id}
      renderItem={({item})=>(
        <Text style ={styles.item} >{item.name}</Text>
      )}
      
      />

   {/* <ScrollView> 
   {people.map((item)=>{

      return (
        <View key ={item.key}>
          <Text style = {styles.item}> {item.name}</Text>
          </View>
      )
    })}
   </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  item: {
    marginTop :24 ,
    padding :30 ,
    backgroundColor :'pink',
    fontSize: 24,
    marginHorizontal:10,
    marginTop:24
  }
});
