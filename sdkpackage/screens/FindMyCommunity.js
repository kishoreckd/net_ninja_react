import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CustomInputField from './constants/CustomInputField';
import CustomButton from './constants/CustomButtons';
import { findMyCommunity } from 'react-native-sdk';

const FindMyCommunity = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [settingsInstance, setCommunityInstance] = useState(null);

  async function fetchSettings(username) {
    try {
      const CommunityInstance = await findMyCommunity(username);
      if (CommunityInstance) {
        setCommunityInstance(CommunityInstance);
      } else {
        console.log('Failed to fetch settings');
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  }

  useEffect(() => {
    fetchSettings(username);
  }, [username]); 

  const handleLogin = () => {
    fetchSettings(username)
    navigation.navigate('SelectMyCommunity', { settingsInstance }); // Pass settingsInstance as a parameter
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
        </View>
        <Text style={{fontSize: 28, fontWeight: '500', color: '#333', marginBottom: 30}}>FindMyCommunity</Text>
        <CustomInputField
          label={'dckap.com'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
          onChangeText={setUsername}
          value={username}
        />
        <CustomButton label={"Find"} onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

export default FindMyCommunity;

