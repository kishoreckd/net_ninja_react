import { gql } from '@apollo/client';
import fs from 'react-native-fs'; // For file system operations
import { MagentoGraphQL } from './client/GraphqlClient'; // Assuming this file contains GraphQL client setup

class MagentoStoreGraphQlSchema {
  static async generate() {
    try {
      const result = await MagentoGraphQL.client.query({
        query: gql(introspectionQuery),
      });

      if (result.error) {
        console.error(result.error);
        return false;
      } else {
        const introspectionJson = result.data;
        const filePath = `${fs.DocumentDirectoryPath}/introspection_result.json`;

        await fs.writeFile(filePath, JSON.stringify(introspectionJson), 'utf8');
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
