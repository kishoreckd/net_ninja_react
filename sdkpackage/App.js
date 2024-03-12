// import React, { useState } from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { TouchableOpacity, Text, View, StatusBar, Switch } from "react-native";
// import { MaterialIcons } from '@expo/vector-icons';
// import { useColorScheme } from 'nativewind';

// import Product from "./screens/product";
// import LoginPage from "./screens/Login";
// import ProductDescription from "./screens/productdescription";
// import ProfilePage from "./screens/profilepage";
// import CartPage from "./screens/CartPage";

// const customTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: '#f5f4f2',
//   },
// };

// const Stack = createStackNavigator();

// const App = () => {
//   const [loaded] = useFonts({
//     InterBold: require("./assets/fonts/Inter-Bold.ttf"),
//     InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
//     InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
//     InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
//     InterLight: require("./assets/fonts/Inter-Light.ttf"),
//   });

//   const [cart, setCart] = useState([]);
//   const { colorScheme, toggleColorScheme } = useColorScheme();

//   if (!loaded) return null;

//   return (
//     <NavigationContainer theme={customTheme}>
//     <Stack.Navigator
//       screenOptions={({ navigation, route }) => ({
//         headerShown: true,
//         headerLeft: () => {
//           if (route.name === 'Product') {
//             return <ProfileButton navigation={navigation} />;
//           } else {
//             if (route.name !== 'Login') {
//               return <BackButton navigation={navigation} />;
//             }
//           }
//         },
//         headerRight: () => {
//           const cartItemCount = cart ? cart.length : 0;
  
//           if (route.name === 'Product') {
//             return (
//               <View className="flex-row items-center">
//                 <TouchableOpacity className='ml-5 mr-4' onPress={toggleColorScheme}>
//                   <MaterialIcons name={colorScheme === 'dark' ? 'light-mode' : 'dark-mode'} size={24} color={colorScheme === 'dark' ? 'white' : 'black'} />
//                 </TouchableOpacity>          
//                 <CartButton navigation={navigation} cartItemCount={cartItemCount}/>
//               </View>
//             );
//           } 
//         },
//         headerStyle: {
//           backgroundColor: colorScheme === 'dark' ? 'black' : 'white', // Change header background color based on color scheme
//         },
//         headerTintColor: colorScheme === 'dark' ? 'white' : 'black', // Change header text color based on color scheme
      
//       })}
//       initialRouteName="Login"
//     >
//       <Stack.Screen theme={customTheme} name="Login" component={LoginPage} /> 
//       <Stack.Screen theme={customTheme} name="Product">
//         {(props) => <Product {...props} cart={cart} setCart={setCart} />}
//       </Stack.Screen>
//       <Stack.Screen theme={customTheme} name="ProductDescription"  >
//       {(props) => <ProductDescription {...props} cart={cart} setCart={setCart} />}
//       </Stack.Screen>
//       <Stack.Screen theme={customTheme} name="ProfilePage" component={ProfilePage} />
//       <Stack.Screen theme={customTheme} name="Cart">{(props) => <CartPage {...props} cart={cart} setCart={setCart} />}</Stack.Screen>
//     </Stack.Navigator>
//   </NavigationContainer>
  
//   );
// };
// const ProfileButton = ({ navigation }) => {
//   const { colorScheme } = useColorScheme(); // Accessing color scheme here

//   return (
//     <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => navigation.navigate('ProfilePage')}>
//       <MaterialIcons name="account-circle" size={24} color={colorScheme === 'dark' ? 'white' : 'black'} />
//     </TouchableOpacity>
//   );
// };

// const BackButton = ({ navigation }) => {
//   const { colorScheme } = useColorScheme(); // Accessing color scheme here

//   return (
//     <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => navigation.goBack()}>
//       <MaterialIcons name="arrow-back" size={24} color={colorScheme === 'dark' ? 'white' : 'black'} />
//     </TouchableOpacity>
//   );
// };

// const CartButton = ({ navigation, cartItemCount }) => {
//   const { colorScheme } = useColorScheme(); // Accessing color scheme here

//   return (
//     <TouchableOpacity style={{ marginRight: 5, position: 'relative' }} onPress={() => navigation.navigate('Cart')}>
//       <MaterialIcons name="shopping-cart" size={24} color={colorScheme === 'dark' ? 'white' : 'black'} />
//       {cartItemCount > 0 && <Text style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'red', color: 'white', borderRadius: 50, width: 16, height: 16, textAlign: 'center' }}>{cartItemCount}</Text>}
//     </TouchableOpacity>
//   );
// };


// export default App;

/*************************************************************** */
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { getSettings } from 'react-native-sdk';

const App = () => {
  useEffect(() => {
    fetchSettings();
  }, []); 

  async function fetchSettings() {
    try {
      const settingsInstance = await getSettings('dckappalli.zircly.com');
      if (settingsInstance) {
        console.log('Company Email:', settingsInstance.settings.companyEmail);
      } else {
        console.log('Failed to fetch settings');
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is your main app component</Text>
    </View>
  );
};

export default App;



/*************************************************************** */


// import React from 'react';
// import { View, Text } from 'react-native';
// import { multiply } from 'react-native-sdk'; 

// const App = () => {

//   multiply(10, 20)
//     .then(result => {
//       console.log('Multiplication result:', result);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>This is your main app component</Text>
//       {/* <ExampleComponent /> Use the imported component here */}
//     </View>
//   );
// };

// export default App;