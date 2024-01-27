import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , ScrollView,FlatList , TouchableOpacity} from 'react-native';
import Header from './components/header';

export default function App() {
const [todos ,setTodos] = useState([
  {text: 'Buy a coffee' , key:'1'},
  {text: 'Create an app' , key:'2'},
  {text: 'play on the switch' , key:'3'},
])

  return (
    <View style={styles.container}>
      {/**Header */}
      <Header />
      <View style ={styles.content}>
      {/**To form */}

      <View style = {styles.list}>
        <FlatList
        data = {todos}
        renderItem={({ item }) => (
          <Text>{item.text}</Text>
        )}
        />
      </View>

      </View>
     
    </View>
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
