import { ApolloLink, split } from '@apollo/client'
import apolloLogger from 'apollo-link-logger'
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries'
import { RetryLink } from '@apollo/client/link/retry'
import { getMainDefinition } from '@apollo/client/utilities'
import { sha256 } from 'crypto-hash'

import httpLink from './http'
import wsLink from './websocket'

const DEVELOPMENT = process.env.NODE_ENV === 'development';

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
    !DEVELOPMENT && createPersistedQueryLink({ sha256 }),
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
