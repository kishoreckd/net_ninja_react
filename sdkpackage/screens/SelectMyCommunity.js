import React from 'react';
import { View, Text } from 'react-native';

const SelectCommunity = ({ route }) => {
  const { settingsInstance } = route.params;

  return (
    <View>
      <Text>This is the SelectCommunity component</Text>
      <Text>{JSON.stringify(settingsInstance)}</Text>
    </View>
  );
};

export default SelectCommunity;
