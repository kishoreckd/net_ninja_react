import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import Product from "./screens/product";


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

  const [cart, setCart] = useState([]);

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
          headerRight: () => {
            const cartItemCount = cart ? cart.length : 0;

            if (route.name === 'Home') {
              return (
                <CartButton navigation={navigation} cartItemCount={cartItemCount}/>
              );
              } else {
              if (route.name !== 'Login') {
                return <BackButton navigation={navigation} />;
              }
            }
          },
        })}
        initialRouteName="Product"
      >
        {/* <Stack.Screen name="Login" component={LoginPage} />  */}
        <Stack.Screen name="Product">
          {(props) => <Product {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>
        {/* <Stack.Screen name="ProductDescription" component={ProductDescription} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="Cart">{(props) => <CartPage {...props} cart={cart} setCart={setCart} />}</Stack.Screen> */}
       </Stack.Navigator>
    </NavigationContainer>
  );
};

const ProfileButton = ({ navigation }) => {
  return (
    <TouchableOpacity className="ml-5" onPress={() => navigation.navigate('ProfilePage')}>
      <MaterialIcons name="account-circle" size={24} color="black" />
    </TouchableOpacity>
  );
};

const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity className="ml-5" onPress={() => navigation.goBack()}>
      <MaterialIcons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};

const CartButton = ({ navigation, cartItemCount }) => {
  return (
    <TouchableOpacity className="mr-5 relative" onPress={() => navigation.navigate('Cart')}>
      <MaterialIcons name="shopping-cart" size={24} color="black" />
      {cartItemCount > 0 && <Text className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex justify-center items-center">{cartItemCount}</Text>}
    </TouchableOpacity>
  );
};

export default App;
