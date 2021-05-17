import {ApolloClient, InMemoryCache} from '@apollo/client';
import Constants from 'expo-constants';

const createApolloClient = (authStorage) => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    request: async (oper) => {
      try { 
        const accessToken = await authStorage.getAccessToken();
        oper.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        });
      } catch(e) {
        console.log(e);
      }
    },
    uri: Constants.manifest.extra.apolloUri,
  });
};

export default createApolloClient;