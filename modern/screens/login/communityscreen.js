import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CommunityScreen = ({ route }) => {
  const { userData } = route.params;

  return (
    <View style={styles.container}>
    <Image source={{ uri: userData.data.avatar }} style={styles.avatar} />
    <Text style={styles.text}>Welcome, {userData.data.first_name}</Text>
    {/* Add more profile information as needed */}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default CommunityScreen;
