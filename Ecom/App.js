import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import Home from "./screens/Home";
import ProductDescription from "./screens/ProductDescription";
import LoginPage from "./screens/Login";
import ProfilePage from "./screens/ProfilePage";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerShown: true,
          headerLeft: () => {
            if (route.name === 'Home') {
              return <ProfileButton navigation={navigation} />;
            } else {
              if (route.name !== 'Login') {
                return <BackButton navigation={navigation} />;
              }
            }
          },
        })}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={LoginPage} /> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDescription" component={ProductDescription} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ProfileButton = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('ProfilePage')}>
      <MaterialIcons name="account-circle" size={24} color="black" />
    </TouchableOpacity>
  );
};

const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <MaterialIcons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileButton: {
    marginLeft: 20,
  },
  backButton: {
    marginLeft: 20,
  },
});

export default App;
