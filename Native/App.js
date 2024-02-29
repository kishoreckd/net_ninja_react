import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { TouchableOpacity, Text, View, StatusBar, Switch } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';

import Product from "./screens/product";
import LoginPage from "./screens/Login";
import ProductDescription from "./screens/productdescription";
import ProfilePage from "./screens/profilepage";
import CartPage from "./screens/CartPage";

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f5f4f2',
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

  const [cart, setCart] = useState([]);
  const { colorScheme, toggleColorScheme } = useColorScheme();

  if (!loaded) return null;

  return (
    <NavigationContainer theme={customTheme}>
      <StatusBar />
      <View style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }}>
        <Switch value={colorScheme === 'dark'} onValueChange={toggleColorScheme} />
        <Stack.Navigator
          screenOptions={({ navigation, route }) => ({
            headerShown: true,
            headerLeft: () => {
              if (route.name === 'Product') {
                return <ProfileButton navigation={navigation} />;
              } else {
                if (route.name !== 'Login') {
                  return <BackButton navigation={navigation} />;
                }
              }
            },
            headerRight: () => {
              const cartItemCount = cart ? cart.length : 0;

              if (route.name === 'Product') {
                return (
                  <CartButton navigation={navigation} cartItemCount={cartItemCount}/>
                );
              } 
            },
          })}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={LoginPage} /> 
          <Stack.Screen name="Product">
            {(props) => <Product {...props} cart={cart} setCart={setCart} />}
          </Stack.Screen>
          <Stack.Screen name="ProductDescription" component={ProductDescription} />
          <Stack.Screen name="ProfilePage" component={ProfilePage} />
          <Stack.Screen name="Cart">{(props) => <CartPage {...props} cart={cart} setCart={setCart} />}</Stack.Screen>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const ProfileButton = ({ navigation }) => {
  return (
    <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => navigation.navigate('ProfilePage')}>
      <MaterialIcons name="account-circle" size={24} color="black" />
    </TouchableOpacity>
  );
};

const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => navigation.goBack()}>
      <MaterialIcons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};

const CartButton = ({ navigation, cartItemCount }) => {
  return (
    <TouchableOpacity style={{ marginRight: 5, position: 'relative' }} onPress={() => navigation.navigate('Cart')}>
      <MaterialIcons name="shopping-cart" size={24} color="black" />
      {cartItemCount > 0 && <Text style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'red', color: 'white', borderRadius: '50%', width: 16, height: 16, fontSize: 12, textAlign: 'center' }}>{cartItemCount}</Text>}
    </TouchableOpacity>
  );
};

export default App;
