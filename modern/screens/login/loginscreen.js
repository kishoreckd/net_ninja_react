import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Dummy community data
const selectedCommunity = {
  domain: 'example.com',
};

const LogInScreen = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
  }, []);

  const handleLogin = async () => {
   
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLoginFailed(true); // Simulate login failure
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/zirclyLogo.png')} style={styles.logo} />
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>to Zircly</Text>
          <Image
            source={require('../../assets/images/House.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.formContainer}>
          
          <Text style={styles.email}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={userEmail}
            onChangeText={(text) => setUserEmail(text)}
          />
          <Text style={styles.email}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={userPassword}
            onChangeText={(text) => setUserPassword(text)}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          {loginFailed && <Text style={styles.errorText}>Login failed, please check your credentials.</Text>}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1, // Ensure the back button is above other components
  },
  backButtonText: {
    color: '#007AFF', // Use the appropriate color for your app's theme
    fontSize: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#636363',
  },
  formContainer: {
    width: '80%',
    alignItems: 'flex-start',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  email: {
    textAlign: 'start',
    marginBottom: 5,
  },
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#5EAF43',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
});

export default LogInScreen;
