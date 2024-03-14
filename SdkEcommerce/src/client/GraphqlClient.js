import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

class MagentoGraphQL {
  static url;
  static accessToken;
  static cacheStore;

  static policies = {
    fetch: 'cache-and-network',
  };

  static client = new ApolloClient({
    link: new HttpLink({
      uri: `https://${MagentoGraphQL.url}/graphql`,
      headers: {
        Authorization: MagentoGraphQL.accessToken,
        'Content-Type': 'application/json',
      },
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // Customize caching behavior if needed
          },
        },
      },
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: MagentoGraphQL.policies.fetch,
      },
      query: {
        fetchPolicy: MagentoGraphQL.policies.fetch,
      },
      mutate: {
        fetchPolicy: MagentoGraphQL.policies.fetch,
      },
    },
  });

  static setStoreCredentials = async ({ url, accessToken, cacheStore }) => {
    MagentoGraphQL.cacheStore = cacheStore;
    MagentoGraphQL.url = url;
    MagentoGraphQL.accessToken = accessToken;
  };
}
