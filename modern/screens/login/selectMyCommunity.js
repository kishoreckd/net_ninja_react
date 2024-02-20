import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Dummy community data
const communityData = {
  list: [
    { companyName: 'Community 1', domainEmail: 'community1@example.com', domain: 'example.com' },
    { companyName: 'Community 2', domainEmail: 'community2@example.com', domain: 'example.com' },
    { companyName: 'Community 3', domainEmail: 'community3@example.com', domain: 'example.com' },
  ]
};

const SelectCommunityScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigation = useNavigation();

  const handleCommunitySelection = (index) => {
    setSelectedIndex(index);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    navigation.navigate('LogInScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={require('../../assets/images/zirclyLogo.png')} style={styles.logo} />
        <Text style={styles.title}>Select Community</Text>
        <View style={styles.communityList}>
          {communityData.list.map((community, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.communityItem,
                index === selectedIndex && styles.selectedItem,
              ]}
              onPress={() => handleCommunitySelection(index)}
            >
              <Text style={styles.communityName}>
                {`${community.companyName}(${community.domainEmail}) ${community.domain}`}
              </Text>
              {index === selectedIndex && (
                <Text style={styles.selectedIcon}>✓</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fab} onPress={handleContinue}>
          <Text style={styles.fabText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  communityList: {
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 4,
  },
  communityItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
  },
  selectedItem: {
    backgroundColor: '#F5F5F5',
  },
  communityName: {
    fontFamily: 'Montserrat',
    fontSize: 14,
  },
  selectedIcon: {
    color: 'green',
    fontSize: 18,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  backButton: {
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  fab: {
    backgroundColor: '#5EAF43',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
  },
  fabText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '700',
    color: '#FFF',
    textAlign: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default SelectCommunityScreen;
