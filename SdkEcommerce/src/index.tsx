import { gql, useQuery } from '@apollo/client';
import RNFS from 'react-native-fs';

const introspectionQuery = `
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
`;

const MagentoStoreGraphQlSchema = () => {
  const { loading, error, data } = useQuery(gql(introspectionQuery));

  if (loading) {
    // Handle loading state
    return '<>Loading...</>';
  }

  if (error) {
    // Handle error state
    console.error(error);
    return null;
  }

  const introspectionJson = data;
  const filePath = `${RNFS.DocumentDirectoryPath}/introspection_result.json`;

  RNFS.writeFile(filePath, JSON.stringify(introspectionJson), 'utf8')
    .then(() => console.log('Introspection result saved successfully'))
    .catch((err) => console.error('Error saving introspection result:', err));

  return null; // or return whatever component you want to render after saving the file
};

export default MagentoStoreGraphQlSchema;
