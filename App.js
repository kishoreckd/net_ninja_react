import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , ScrollView,FlatList , TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todo';
import AddTodo from './components/addTodo';

export default function App() {
const [todos ,setTodos] = useState([
  {text: 'Buy a coffee' , key:'1'},
  {text: 'Create an app' , key:'2'},
  {text: 'play on the switch' , key:'3'},
])

 const presshandler =(key)=>{
  setTodos ((prevTodos)=>{
    return prevTodos.filter(todo=>todo.key !=key)
  })
 }

 const submitHandler =(text)=>{
  if (text.length >3 ) {
    setTodos((prevTodos)=>{
      return [
        {text:text, key:Math.random().toString()},
        ...prevTodos
      ]
    });
  }
  else{
    Alert.alert('OOPS!','Todos must be over 3 chars long',[
      {text:'Understood', onPress:()=>console.log('alert closed')}
    ])
  }
 }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed Keyboard');
    }}>
      <View style={styles.container}>
      {/**Header */}
      <Header />
      <View style ={styles.content}>
      {/**To form */}
      <AddTodo submitHandler = {submitHandler}/>
      <View style = {styles.list}>
        <FlatList
        data = {todos}
        renderItem={({ item }) => (
          <TodoItem item={item} presshandler={presshandler} />

        )}
        />
      </View>

      </View>
     
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop:40,
    // paddingHorizontal:20
  },
  content : {
    padding :40,
  }
  
});
