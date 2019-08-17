import { ApolloClient } from 'apollo-client'
import gql from 'graphql-tag'
import { setContext } from 'apollo-link-context';

import cache from './cache'
import link from './link'

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = window.localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache,
  connectToDevTools: true
});

export default client
;(window as any).client = client
;(window as any).gql = gql

// Usage: mutation`mutation {}`
;(window as any).mutation = (...args: any) =>
  client.mutate({ mutation: (gql as any)(...args) })

// Usage: query`query {}`
;(window as any).query = (...args: any) =>
  client.query({ query: (gql as any)(...args) })

export { client }