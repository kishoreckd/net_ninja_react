import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfilePage = () => {
  // Dummy user data
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "123-456-7890",
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{userData.name}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{userData.email}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.text}>{userData.phoneNumber}</Text>
      </View>

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  userInfo: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  text: {
    fontSize: 16,
    color: "#555",
  },
  maskedText: {
    fontSize: 16,
    color: "#888",
  },
});

export default ProfilePage;
