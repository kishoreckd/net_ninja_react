// import React, { useState } from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { TouchableOpacity, Text, View, StatusBar, Switch } from "react-native";
// import { MaterialIcons } from '@expo/vector-icons';
// import { useColorScheme } from 'nativewind';

// import FindMyCommunity from "./screens/FindMyCommunity";
// import SelectCommunity from "./screens/SelectMyCommunity";

// const customTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: '#f5f4f2',
//   },
// };

// const Stack = createStackNavigator();

// const App = () => {
//   const [loaded] = useFonts({
//     InterBold: require("./assets/fonts/Inter-Bold.ttf"),
//     InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
//     InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
//     InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
//     InterLight: require("./assets/fonts/Inter-Light.ttf"),
//   });

//   const [cart, setCart] = useState([]);
//   const { colorScheme, toggleColorScheme } = useColorScheme();

//   if (!loaded) return null;

//   return (
//     <NavigationContainer theme={customTheme}>
//       <Stack.Navigator initialRouteName="FindMyCommunity">
//         <Stack.Screen name="FindMyCommunity" component={FindMyCommunity} />
//         <Stack.Screen name="SelectMyCommunity" component={SelectCommunity} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// /*************************************************************** */
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getSettings } from 'react-native-sdk';

const App = () => {
  const [settingsInstance, setSettingsInstance] = useState(null);

  useEffect(() => {
    fetchSettings();
  }, []); 

  async function fetchSettings() {
    try {
      const settingsInstance = await getSettings('dckappalli.zircly.com');
      if (settingsInstance) {
        setSettingsInstance(settingsInstance);
      } else {
        console.log('Failed to fetch settings');
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {settingsInstance && settingsInstance.settings && (
        <Text>This is your company_email: {settingsInstance.settings.companyName}</Text>
      )}
    </View>
  );
};

export default App;



/*************************************************************** */


// import React from 'react';
// import { View, Text } from 'react-native';
// import { multiply } from 'react-native-sdk'; 

// const App = () => {

//   multiply(10, 20)
//     .then(result => {
//       console.log('Multiplication result:', result);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>This is your main app component</Text>
//       {/* <ExampleComponent /> Use the imported component here */}
//     </View>
//   );
// };

// export default App;