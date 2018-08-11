import { ApolloLink } from 'apollo-link'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { onError } from 'apollo-link-error'

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
    uri: '/api/graphql',
    batchInterval: 20
  })
])

export default httpLink
