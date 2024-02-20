import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";




const FindMyCommunityScreen = () => {
  
  const [userEmail, setUserEmail] = useState('');
  const [isCommunityAvailable, setIsCommunityAvailable] = useState(true);
  const navigator = useNavigation();

  
  const handleFindNow = async () => {
    try {
      const response = await fetch('https://api.zircly.com/api/find-host', {
        method: 'POST',
        headers: {
          'Origin': 'https://login.zircly.com',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email: userEmail }),
      });

      const data = await response.json();
     
      if (response.ok && data.success) {
        navigator.navigate('SelectMyCommunity',{ communityData: data.data });
      } else {
        Alert.alert('Please add your Email', data.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Network error. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View>
          <Image source={require('../../assets/images/zirclyLogo.png')} style={styles.logo} />
          <Text style={styles.title}>Find My Community</Text>
          <Text style={styles.subtitle}>
            Enter your email, and we’ll get your zircly communities and redirect you to the login page.
          </Text>
          <Image source={require('../../assets/images/House.png')} style={styles.image} />
          <TextInput
            style={styles.input}
            placeholder="Email/Name"
            keyboardType="email-address"
            value={userEmail}
            onChangeText={(text) => setUserEmail(text)}
          />
          {!isCommunityAvailable && (
            <Text style={styles.errorText}>
              Community not found, please check your email or sign up to create your account
            </Text>
          )}
          <TouchableOpacity style={styles.button} onPress={handleFindNow}>
            <Text style={styles.buttonText}>Find Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  container: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    // fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  subtitle: {
    // fontFamily: 'Montserrat',
    color: '#636363',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 295,
    height:  150,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#5EAF43',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    // fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '700',
    color: '#FFF',
  },
  errorText: {
    // fontFamily: 'Montserrat',
    color: 'red',
    marginBottom: 20,
  },
});

export default FindMyCommunityScreen;
