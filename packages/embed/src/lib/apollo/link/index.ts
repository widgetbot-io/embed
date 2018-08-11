import { ApolloLink, split } from 'apollo-link'
import apolloLogger from 'apollo-link-logger'
import { createPersistedQueryLink } from 'apollo-link-persisted-queries'
import { RetryLink } from 'apollo-link-retry'
import { getMainDefinition } from 'apollo-utilities'

import stateLink from '../../../state'
import httpLink from './http'
import wsLink from './websocket'

const DEVELOPMENT = process.env.NODE_ENV === 'development'

const link = ApolloLink.from(
  [
    apolloLogger,
    stateLink,
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
        const { kind, operation } = getMainDefinition(query) as any

        return kind === 'OperationDefinition' && operation === 'subscription'
      },
      wsLink,
      httpLink
    )
  ].filter(Boolean)
)

export default link
