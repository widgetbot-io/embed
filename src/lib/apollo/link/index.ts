import { ApolloLink, split } from 'apollo-link'
import apolloLogger from 'apollo-link-logger'
import { createPersistedQueryLink } from 'apollo-link-persisted-queries'
import { RetryLink } from 'apollo-link-retry'
import { getMainDefinition } from 'apollo-utilities'

import httpLink from './http'
import wsLink from './websocket'

const DEVELOPMENT = process.env.NODE_ENV === 'development';
console.log(`${location.protocol === 'https:' ? 'wss' : 'ws'}://127.0.0.1:8443/api/graphql`);


const link = ApolloLink.from(
  [
    apolloLogger,
    new RetryLink({
      attempts: {
        max: 300
      },
      delay: {
        initial: 200
      }
    }),
    !DEVELOPMENT && createPersistedQueryLink(),
    split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query) as any;

        return kind === 'OperationDefinition' && operation === 'subscription'
      },
      wsLink,
      httpLink
    )
  ].filter(Boolean)
);

export default link
