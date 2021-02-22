import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context';

import cache from './cache'
import link from './link'

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = window.localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: token ? token : "",
      }
    }
  }
  return {
    headers
  }
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache,
  connectToDevTools: true
});

export default client
