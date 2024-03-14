// import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// class MagentoGraphQL {
//   static _url = '';
//   static _accessToken = '';
//   static _cacheStore = null;

//   static client() {
//     const link = new HttpLink({
//       uri: `https://gamma.sokolin.com/graphql`,
//       headers: {
//         Authorization: `acc4pduekktesh2byz1owhfg007ejyca`,
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

//     try {
//       await AsyncStorage.setItem('url', url);
//       await AsyncStorage.setItem('accessToken', accessToken);
//     } catch (error) {
//       console.error('Error storing credentials:', error);
//     }
//   }
// }


// export default MagentoGraphQL
