import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'nativewind'; // Assuming nativewind provides useColorScheme hook

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  const checkIfLoggedIn = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        navigation.navigate("Product");
      }
    } catch (error) {
      console.error('Error checking if logged in:', error);
    }
  };

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        throw new Error('Username and password are required');
      }
  
      const response = await fetch('https://fakestoreapi.com/users/1');
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
  
      const userData = await response.json(); // Parse response data
      await AsyncStorage.setItem('userData', JSON.stringify(userData)); // Store user data in AsyncStorage
      navigation.navigate("Product");
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };

  return (
    <View className="flex-1 justify-center items-center px-4">
      <Text className="text-2xl font-bold mb-4">Login</Text>
      <View className="flex-row items-center my-2">
        <MaterialIcons name="person" size={24} color="black" className="mr-2"/>
        <TextInput
          className="flex-1 border border-gray-300 rounded p-2"
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View className="flex-row items-center my-2">
        <MaterialIcons name="lock" size={24} color="black" className="mr-2" />
        <TextInput
          className="flex-1 border border-gray-300 rounded p-2"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-xl mt-4" onPress={handleLogin}>
        <Text className="text-white font-bold text-lg">Login</Text>
      </TouchableOpacity> 
    </View>
  );
};

export default LoginPage;
