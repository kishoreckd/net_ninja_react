import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style ={styles.headers}>
          <Text style ={styles.boldText}>Hello World</Text>
      </View>
      {/* <View style ={styles.body}>
          <Text style ={styles.text}>Body</Text>
          <Text style ={styles.text}>Body</Text>
          <Text style ={styles.text}>Body</Text>
          <Text style ={styles.text}>Body</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headers:{
    backgroundColor:'pink', alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  boldText: {
    flex: 1,
    color:'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
