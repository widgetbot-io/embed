import { ApolloLink } from 'apollo-link'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { onError } from 'apollo-link-error'
import {url} from "@lib/env";

const httpLink = ApolloLink.from([
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )
    if (networkError) console.error(`[Network error]: ${networkError}`)
  }),
  new BatchHttpLink({
    uri: url.includes('127.0.0.1') ? `http://${url}/api/graphql` : `https://${url}/api/graphql`,
    batchInterval: 20,
    batchMax: 2
  })
].filter(Boolean) as any);

export default httpLink
