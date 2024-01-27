import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , ScrollView } from 'react-native';

export default function App() {
  
const [people , setPeople] = useState ([

  {name:'Kishore' ,key:'1'} ,
  {name:'Akash' ,key:'2'} ,
  {name:'Jeeva' ,key:'3'} ,
  {name:'Dhanush' ,key:'4'} ,
  {name:'Bala' ,key:'5'} ,
  {name:'Bharat' ,key:'6'} ,
  {name:'dkjhsidw' ,key:'7'} ,
  {name:'jiihih' ,key:'8'} ,
  {name:'hikhihi' ,key:'9'} ,
  {name:'gfeifeg' ,key:'10'} ,
  {name:'hikhdeiuhiihi' ,key:'11'} ,
]);
  return (
    <View style={styles.container}>

   <ScrollView>

     
   {people.map((item)=>{

return (
  <View key ={item.key}>
    <Text style = {styles.item}> {item.name}</Text>
     </View>
)
})}
   </ScrollView>
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
    fontSize: 24
  }
});
