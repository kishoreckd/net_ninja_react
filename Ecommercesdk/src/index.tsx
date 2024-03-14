export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
// import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// class MagentoGraphQL {
//   static _url = '';
//   static _accessToken = '';
//   static _cacheStore = null;

//   static client() {
//     const link = new HttpLink({
//       uri: `https://${MagentoGraphQL._url}/graphql`,
//       headers: {
//         Authorization: `Bearer ${MagentoGraphQL._accessToken}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     return new ApolloClient({
//       link,
//       cache: new InMemoryCache(),
//     });
//   }

//   static async setStoreCredentials({ url, accessToken, cacheStore }: { url: string; accessToken: string; cacheStore: any }) {
//     if (!url || !accessToken || !cacheStore) {
//       throw new Error('Missing required parameters');
//     }
//     MagentoGraphQL._cacheStore = cacheStore;
//     MagentoGraphQL._url = url;
//     MagentoGraphQL._accessToken = accessToken;

//     // Optionally, store credentials in AsyncStorage
//     try {
//       await AsyncStorage.setItem('url', url);
//       await AsyncStorage.setItem('accessToken', accessToken);
//     } catch (error) {
//       console.error('Error storing credentials:', error);
//     }
//   }
// }




// async function setCredentialsAndGenerateSchema() {
//   try {
//     // Retrieve cache store from AsyncStorage
//     const cacheStore = await AsyncStorage.getItem('cacheStore');

//     // Set store credentials
//     await MagentoGraphQL.setStoreCredentials({
//       url: 'gamma.sokolin.com',
//       accessToken: 'acc4pduekktesh2byz1owhfg007ejyca',
//       cacheStore: cacheStore,
//     });

//     // Generate GraphQL schema
//     const client = MagentoGraphQL.client();
//     const result = await client.query({
//       query: gql`
//       query IntrospectionQuery {
//         __schema {
//           queryType {
//             name
//           }
//           mutationType {
//             name
//           }
//           subscriptionType {
//             name
//           }
//           types {
//             ...FullType
//           }
//           directives {
//             name
//             description
//             locations
//             args {
//               ...InputValue
//             }
//           }
//         }
//       }

//       fragment FullType on __Type {
//         kind
//         name
//         description
//         fields(includeDeprecated: true) {
//           name
//           description
//           args {
//             ...InputValue
//           }
//           type {
//             ...TypeRef
//               fields(includeDeprecated: true) {
//                   name
//                   description
//                   args {
//                   ...InputValue
//                   }
//                   type {
//                   ...TypeRef
//                   }
//                   isDeprecated
//                   deprecationReason
//               }
//                inputFields {
//                   ...InputValue
//               }
//               interfaces {
//                   ...TypeRef
//               }
//               enumValues(includeDeprecated: true) {
//                   name
//                   description
//                   isDeprecated
//                   deprecationReason
//               }
//               possibleTypes {
//                   ...TypeRef
//               }
//           }
//           isDeprecated
//           deprecationReason
//         }
//         inputFields {
//           ...InputValue
//         }
//         interfaces {
//           ...TypeRef
//         }
//         enumValues(includeDeprecated: true) {
//           name
//           description
//           isDeprecated
//           deprecationReason
//         }
//         possibleTypes {
//           ...TypeRef
//         }
//       }

//       fragment InputValue on __InputValue {
//         name
//         description
//         type {
//           ...TypeRef
//         }
//         defaultValue
//       }

//       fragment TypeRef on __Type {
//         kind
//         name
//         ofType {
//           kind
//           name
//           ofType {
//             kind
//             name
//             ofType {
//               kind
//               name
//             }
//           }
//         }
//       }
//       `,
//     });

//     if (result) {
//       const introspectionJson = JSON.stringify(result.data, null, 2);
//       console.log('GraphQL schema:', introspectionJson);
//     } else {
//       console.error('Failed to generate GraphQL schema.');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// export default MagentoGraphQL;
import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

class MagentoGraphQL {
  static _url = '';
  static _accessToken = '';
  static _cacheStore = null;

  static client() {
    const link = new HttpLink({
      uri: `https://${MagentoGraphQL._url}/graphql`,
      headers: {
        Authorization: MagentoGraphQL._accessToken,
        'Content-Type': 'application/json',
      },
    });

    const client = new ApolloClient({
      link,
      cache: new InMemoryCache(),
    });

    // Log the client instance
    // console.log('ApolloClient instance:', client);

    return client;
  }

  static async setStoreCredentials({ url, accessToken, cacheStore }: { url: string; accessToken: string; cacheStore: any }) {
    if (!url || !accessToken || !cacheStore) {
      throw new Error('Missing required parameters');
    }
    MagentoGraphQL._cacheStore = cacheStore;
    MagentoGraphQL._url = url;
    MagentoGraphQL._accessToken = accessToken;



    try {
      await AsyncStorage.setItem('url', url);
      await AsyncStorage.setItem('accessToken', accessToken);

    } catch (error) {
      console.error('Error storing credentials:', error);
    }
  }
  static async generate() {
    try {
      const result = await MagentoGraphQL.client().query({
        query: gql(`
          query IntrospectionQuery {
            __schema {
              queryType {
                name
              }
              mutationType {
                name
              }
              subscriptionType {
                name
              }
              types {
                ...FullType
              }
              directives {
                name
                description
                locations
                args {
                  ...InputValue
                }
              }
            }
          }

          fragment FullType on __Type {
            kind
            name
            description
            fields(includeDeprecated: true) {
              name
              description
              args {
                ...InputValue
              }
              type {
                ...TypeRef
                fields(includeDeprecated: true) {
                  name
                  description
                  args {
                    ...InputValue
                  }
                  type {
                    ...TypeRef
                  }
                  isDeprecated
                  deprecationReason
                }
                inputFields {
                  ...InputValue
                }
                interfaces {
                  ...TypeRef
                }
                enumValues(includeDeprecated: true) {
                  name
                  description
                  isDeprecated
                  deprecationReason
                }
                possibleTypes {
                  ...TypeRef
                }
              }
              isDeprecated
              deprecationReason
            }
            inputFields {
              ...InputValue
            }
            interfaces {
              ...TypeRef
            }
            enumValues(includeDeprecated: true) {
              name
              description
              isDeprecated
              deprecationReason
            }
            possibleTypes {
              ...TypeRef
            }
          }

          fragment InputValue on __InputValue {
            name
            description
            type {
              ...TypeRef
            }
            defaultValue
          }

          fragment TypeRef on __Type {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        `),
      });

      console.log('GraphQL result:', result);

      if (result.errors) {
        console.error('Error generating Magento GraphQL schema:', result.errors);
        return false;
      } else {
        const introspectionJson = result.data;
        console.log('Introspection result:', introspectionJson);
        return true;
      }
    }

    catch (error) {
      // console.log(error);
      console.error('Error generating Magento GraphQL schema:', error);
      return false;
    }
  }
}


export default MagentoGraphQL;
