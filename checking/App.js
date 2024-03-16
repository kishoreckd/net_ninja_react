// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import {lo } from 'sdkdummy';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React, { useEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';
import MagentoGraphQL from 'sdkdummy';

const App = () => {
  useEffect(() => {
    const initializeMagento = async () => {
      try {
        await MagentoGraphQL.setStoreCredentials({
          url: 'rickandmortyapi.com',
          accessToken: 'acc4pduekktesh2byz1owhfg007ejyca',
          cacheStore: {},
        });
        await MagentoGraphQL.generate();
      } catch (error) {
        console.error('Error initializing Magento:', error);
      }
    };

    initializeMagento();
  }, []);

  return (
    <SafeAreaView>
      <Text>App Content</Text>
    </SafeAreaView>
  );
};

export default App;
