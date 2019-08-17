import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import localForage from 'localforage'

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

export const cacheLoaded = persistCache({
  cache,
  storage: localForage as any
})

export default cache
;(window as any).cache = cache
