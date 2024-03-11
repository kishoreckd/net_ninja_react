import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, Pressable, SafeAreaView, Switch } from "react-native";
// import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from 'react-native-vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';


import LoginSVG from '../assets/images/misc/login.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';

import CustomInputField from './CustomInputField';
import CustomButton from './CustomButtons';


const LoginPage = ({ navigation }) => {
  const [click, setClick] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  const checkIfLoggedIn = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        navigation.navigate("Home");
      }
    } catch (error) {
      console.error('Error checking if logged in:', error);
    }
  };

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        throw new Error('Username and password are requiblue');
      }
  
      const response = await fetch('https://fakestoreapi.com/users/1');
      if (!response.ok) {
        throw new Error('Invalid cblueentials');
      }
  
      const userData = await response.json(); // Parse response data
      await AsyncStorage.setItem('userData', JSON.stringify(userData)); // Store user data in AsyncStorage
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <LoginSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <CustomInputField
          label={'Email ID'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
        />

<CustomInputField
          label={'Password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={"Login"} onPress={() => {}} />

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  
  );
  // return(
  //   <SafeAreaView className="items-center pt-16">
  //     <Image source={logo} className="h-32 w-32" resizeMode='contain' />
  //     <Text className="text-3xl font-bold text-blue-500 mb-8">Login</Text>
  //     <View className="w-full px-8">
  //       <TextInput
  //         className="h-12 border border-blue-500 rounded px-4 mb-4"
  //         placeholder='EMAIL OR USERNAME'
  //         value={username}
  //         onChangeText={setUsername}
  //         autoCorrect={false}
  //         autoCapitalize='none'
  //       />
  //       <TextInput
  //        className="h-12 border border-blue-500 rounded px-4 mb-4"
  //         placeholder='PASSWORD'
  //         secureTextEntry
  //         value={password}
  //         onChangeText={setPassword}
  //         autoCorrect={false}
  //         autoCapitalize='none'
  //       />
  //     </View>
  //     <View className="w-full px-8 flex-row justify-between items-center mb-6">
  //       <View className="flex-row items-center">
  //         <Switch
  //           value={click}
  //           onValueChange={setClick}
  //           trackColor={{true : "green" , false : "gray"}}
  //         />
  //         <Text className="text-sm">Remember Me</Text>
  //       </View>
  //       <Pressable onPress={() => Alert.alert("Forget Password!")}>
  //         <Text className="text-sm text-blue-500">Forgot Password?</Text>
  //       </Pressable>
  //     </View>
  //     <TouchableOpacity className="bg-blue-500 py-3 px-8 rounded mb-4" onPress={handleLogin}>
  //       <Text className="text-white text-lg font-bold">LOGIN</Text>
  //     </TouchableOpacity>
  //     <Text className="text-sm text-gray-500 mb-4">OR LOGIN WITH</Text>
  //     <View className="flex-row justify-around w-3/4 mb-12">
  //     </View>
  //     <Text className="text-gray-500">Don't Have Account?<Text className="text-blue-500">  Sign Up</Text></Text>
  //   </SafeAreaView>
  // );
};

export default LoginPage;




// import React from 'react';
// import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
// import { MaterialIcons } from 'react-native-vector-icons';

// import LoginSVG from '../assets/images/misc/login.svg';
// import GoogleSVG from '../assets/images/misc/google.svg';
// import FacebookSVG from '../assets/images/misc/facebook.svg';
// import TwitterSVG from '../assets/images/misc/twitter.svg';

// import InputField from './CustomInputField';
// import CustomButton from './CustomButtons';

// const LoginPage = ({ navigation }) => {
//   return (
//     <SafeAreaView classname ="flex-1 justify-center items-center">
//       <View classname="px-8">
//         <View classname="items-center mb-8">
//           <LoginSVG
//             height={300}
//             width={300}
//             classname="transform-[rotate(-5deg)"
//           />
//         </View>

//         <Text classname="font-medium text-lg text-center text-gray-700 mb-6">
//           Login
//         </Text>

//         <InputField
//           label={'Email ID'}
//           icon={
//             <MaterialIcons
//               name="alternate-email"
//               size={20}
//               color="#666"
//              classname="mr-2"
//             />
//           }
//           keyboardType="email-address"
//         />

//         <InputField
//           label={'Password'}
//           icon={
//             <MaterialIcons
//               name="lock"
//               size={20}
//               color="#666"
//               classname="mr-2"
//             />
//           }
//           inputType="password"
//           fieldButtonLabel={'Forgot?'}
//           fieldButtonFunction={() => {}}
//         />

//         <CustomButton label={'Login'} onPress={() => {}} />

//         <Text classname="text-center text-gray-600 mb-6">
//           Or, login with ...
//         </Text>

//         <View classname="flex-row justify-between mb-6">
//           <TouchableOpacity
//             onPress={() => {}}
//             classname="border-2 border-gray-300 rounded-full px-4 py-2">
//             <GoogleSVG height={24} width={24} />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => {}}
//             classname="border-2 border-gray-300 rounded-full px-4 py-2">
//             <FacebookSVG height={24} width={24} />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => {}}
//             classname="border-2 border-gray-300 rounded-full px-4 py-2">
//             <TwitterSVG height={24} width={24} />
//           </TouchableOpacity>
//         </View>

//         <View classname="flex-row justify-center">
//           <Text>New to the app? </Text>
//           <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//             <Text classname="text-purple-700 font-semibold">Register</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default LoginPage;
