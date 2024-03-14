import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

 class MagentoGraphQL {
  static url; // Specify the type for 'url'
  static accessToken; // Specify the type for 'accessToken'
  static cacheStore; // Specify the type for 'cacheStore'

  static client() {
    const link = new HttpLink({
      uri: `https://${MagentoGraphQL.url}/graphql`,
      headers: {
        Authorization: MagentoGraphQL.accessToken,
        'Content-Type': 'application/json',
      },
    });
    return new ApolloClient({
      link: link,
      cache: new InMemoryCache(),
    });
  }

  static async setStoreCredentials({ url, accessToken, cacheStore }) {
    MagentoGraphQL.cacheStore = cacheStore;
    MagentoGraphQL.url = url;
    MagentoGraphQL.accessToken = accessToken;
  }
}


export default MagentoGraphQL
