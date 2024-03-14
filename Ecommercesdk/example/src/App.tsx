// import * as React from 'react';

// import { StyleSheet, View, Text } from 'react-native';
// import { multiply } from 'ecommercesdk';

// export default function App() {
//   const [result, setResult] = React.useState<number | undefined>();

//   React.useEffect(() => {
//     multiply(3, 7).then(setResult);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text>Result: {result}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 60,
//     height: 60,
//     marginVertical: 20,
//   },
// });



// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import MagentoGraphQL from 'ecommercesdk'; // Adjust the path as needed
// import { gql } from '@apollo/client';

// const App = () => {
//   // useEffect(() => {
//   //   const fetchDataAndStoreSchema = async () => {
//   //     try {
//   //       // Retrieve cache store from AsyncStorage
//   //       const cacheStore = await AsyncStorage.getItem('cacheStore');
//   //       console.log('Cache store:', cacheStore);

//   //       // Set store credentials
//   //       await MagentoGraphQL.setStoreCredentials({
//   //         url: 'gamma.sokolin.com',
//   //         accessToken: 'acc4pduekktesh2byz1owhfg007ejyca',
//   //         cacheStore: cacheStore,
//   //       });

//   //       console.log('Store credentials set successfully.');

//   //       const client = MagentoGraphQL.client();
//   //       const result = await client.query({
//   //         query: gql`
//   //           query IntrospectionQuery {
//   //             __schema {
//   //               queryType {
//   //                 name
//   //               }
//   //               mutationType {
//   //                 name
//   //               }
//   //               subscriptionType {
//   //                 name
//   //               }
//   //               types {
//   //                 ...FullType
//   //               }
//   //               directives {
//   //                 name
//   //                 description
//   //                 locations
//   //                 args {
//   //                   ...InputValue
//   //                 }
//   //               }
//   //             }
//   //           }

//   //           fragment FullType on __Type {
//   //             kind
//   //             name
//   //             description
//   //             fields(includeDeprecated: true) {
//   //               name
//   //               description
//   //               args {
//   //                 ...InputValue
//   //               }
//   //               type {
//   //                 ...TypeRef
//   //                 fields(includeDeprecated: true) {
//   //                   name
//   //                   description
//   //                   args {
//   //                     ...InputValue
//   //                   }
//   //                   type {
//   //                     ...TypeRef
//   //                   }
//   //                   isDeprecated
//   //                   deprecationReason
//   //                 }
//   //                 inputFields {
//   //                   ...InputValue
//   //                 }
//   //                 interfaces {
//   //                   ...TypeRef
//   //                 }
//   //                 enumValues(includeDeprecated: true) {
//   //                   name
//   //                   description
//   //                   isDeprecated
//   //                   deprecationReason
//   //                 }
//   //                 possibleTypes {
//   //                   ...TypeRef
//   //                 }
//   //               }
//   //               isDeprecated
//   //               deprecationReason
//   //             }
//   //             inputFields {
//   //               ...InputValue
//   //             }
//   //             interfaces {
//   //               ...TypeRef
//   //             }
//   //             enumValues(includeDeprecated: true) {
//   //               name
//   //               description
//   //               isDeprecated
//   //               deprecationReason
//   //             }
//   //             possibleTypes {
//   //               ...TypeRef
//   //             }
//   //           }

//   //           fragment InputValue on __InputValue {
//   //             name
//   //             description
//   //             type {
//   //               ...TypeRef
//   //             }
//   //             defaultValue
//   //           }

//   //           fragment TypeRef on __Type {
//   //             kind
//   //             name
//   //             ofType {
//   //               kind
//   //               name
//   //               ofType {
//   //                 kind
//   //                 name
//   //                 ofType {
//   //                   kind
//   //                   name
//   //                 }
//   //               }
//   //             }
//   //           }
//   //         `,
//   //       });

//   //       if (result) {
//   //         const introspectionJson = JSON.stringify(result.data, null, 2);
//   //         console.log('GraphQL schema:', introspectionJson);
//   //       } else {
//   //         console.error('Failed to generate GraphQL schema.');
//   //       }
//   //     } catch (error) {
//   //       console.error('Error:', error);
//   //     }
//   //   };

//   //   // Call fetchDataAndStoreSchema when the component mounts
//   //   fetchDataAndStoreSchema();
//   // }, []);

//   return (
//     <View>
//       <Text>App Content</Text>
//     </View>
//   );
// };

// export default App;
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import MagentoGraphQL from 'ecommercesdk';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  useEffect(() => {
    const initializeMagento = async () => {
      try {
        await MagentoGraphQL.setStoreCredentials({
          url: 'gamma.sokolin.com',
          accessToken: 'acc4pduekktesh2byz1owhfg007ejyca',
          cacheStore: {},
        });
        // const url = await AsyncStorage.getItem('url');

        await MagentoGraphQL.generate();
      } catch (error) {
        console.error('Error initializing Magento:', error);
      }
    };

    initializeMagento();
  }, []);

  return (
    <View>
      <Text>App Content</Text>
    </View>
  );
};

export default App;
