import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'

import cacheRedirects from './cacheRedirects'
import dataIdFromObject from './dataIdFromObject'

const introspectionQueryResultData = require('../codegen/fragmentTypes.json')
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
})

const cache = new InMemoryCache({
  fragmentMatcher,
  cacheRedirects,
  dataIdFromObject
})
persistCache({ cache, storage: localStorage })

export default cache
;(window as any).cache = cache
