import { ClientStateConfig, withClientState } from 'apollo-link-state'
import * as R from 'ramda'
import cache from '../lib/apollo/cache'
import schema from './schema'

const resolve = (require as any).context('./', true, /.\/*[a-zA-Z]\/index$/)
const resolvers = resolve.keys().map(resolver => resolve(resolver).default)

const mergeTypeDefs = R.mergeDeepWithKey(
  (k, l, r) => (k === 'typeDefs' ? `${l}${r}` : r)
)
const mergeResolvers = R.reduce(mergeTypeDefs, {}) as (
  resolvers: ClientStateConfig[]
) => ClientStateConfig

const stateLink = withClientState({
  typeDefs: schema,
  cache,
  ...mergeResolvers(resolvers)
})

export default stateLink
