import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , ScrollView,FlatList , TouchableOpacity} from 'react-native';

export default function App() {
  
const [people , setPeople] = useState ([

  {name:'Kishore' ,id:'1'} ,
  {name:'Akash' ,id:'2'} ,
  {name:'Jeeva' ,id:'3'} ,
  {name:'Dhanush' ,id:'4'} ,
  {name:'Bala' ,id:'5'} ,
  {name:'Bharat' ,id:'6'} ,
  {name:'dkjhsidw' ,id:'7'} ,
 
]);


const pressHandler =(id)=>{
  console.log(id);
  setPeople((prevPeople)=>{
    return prevPeople.filter(person =>person.id !=id)
  })
}
  return (
    <View style={styles.container}>

      <FlatList data={people}
      numColumns={2}
      keyExtractor={ (item) => item.id}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>{
          pressHandler(item.id)
        }}>
         <Text style ={styles.item} >{item.name}</Text>
        </TouchableOpacity>
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
