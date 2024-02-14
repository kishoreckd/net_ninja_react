import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import Home from './screens/Home';
import Details from './screens/Details';
import {useFonts} from 'expo-font';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"transparent"
  }
}
export default function App() {
  const [loaded] = useFonts({
     InterBold: require("./assets/fonts/Inter-Bold.ttf"),
     InterLight: require("./assets/fonts/Inter-Light.ttf"),
     InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
     InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
     InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf")
  });

  if (!loaded) return null;
  
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
    return(
   <NavigationContainer theme={theme}>
     <Stack.Navigator screenOptions={{headerShown:false  }} initialRouteName="Home">

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
   </NavigationContainer>
      
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
