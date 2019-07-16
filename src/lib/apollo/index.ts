import { ApolloClient } from 'apollo-client'
import gql from 'graphql-tag'

import cache from './cache'
import link from './link'

const client = new ApolloClient({
  link,
  cache,
  connectToDevTools: true
})

export default client
;(window as any).client = client
;(window as any).gql = gql

// Usage: mutation`mutation {}`
;(window as any).mutation = (...args) =>
  client.mutate({ mutation: (gql as any)(...args) })

// Usage: query`query {}`
;(window as any).query = (...args) =>
  client.query({ query: (gql as any)(...args) })
