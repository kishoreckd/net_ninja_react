import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfilePage = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    retrieveUserData();
  }, []);

  const retrieveUserData = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem('userData');
      if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Failed to logout. Please try again.');
    }
  };

  return (
    <View className="flex-1 p-4 bg-gray-100">
      {userData && (
        <>
          <View className="mb-4">
            <Text className="font-semibold mb-1">First Name:</Text>
            <Text className="text-gray-800">{userData.username}</Text>
          </View>

          <View className="mb-4">
            <Text className="font-semibold mb-1">Email:</Text>
            <Text className="text-gray-800">{userData.email}</Text>
          </View>
        </>
      )}

      {/* Logout Button */}
      <TouchableOpacity
        className="bg-red-500 py-3 px-6 rounded-md mt-4"
        onPress={handleLogout}
      >
        <Text className="text-white font-semibold text-center">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePage;
