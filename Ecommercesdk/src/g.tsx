import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';
// import * as fs from 'fs';

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
        query Query {
          characters(page: 2, filter: { name: "Morty" }) {
            info {
              count
            }
            results {
              name
            }
          }
          location(id: 1) {
            id
          }
          episodesByIds(ids: [1, 2]) {
            id
          }
        }
        `),
      });

      // console.log('GraphQL result:', result);

      if (result.errors) {
        console.error('Error generating Magento GraphQL schema:', result.errors);
        return false;
      } else {
        const introspectionJson = result.data;
        // console.log('Introspecrtion result:', introspectionJson);
        const introspectionString = JSON.stringify(introspectionJson, null, 2);

        // const filePath = `${FileSystem.documentDirectory}introspectionResult.json`;
        // await FileSystem.writeAsStringAsync(filePath, introspectionJson);
      const filePath = `${FileSystem.documentDirectory}introspectionResult.json`;
      await FileSystem.writeAsStringAsync(filePath, introspectionString);
console.log(FileSystem);

      // console.log('Introspection data saved to:', filePath);

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
