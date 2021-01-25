import {
  InMemoryCache
} from '@apollo/client/cache'
import { persistCache } from 'apollo3-cache-persist'
import localForage from 'localforage'

import typePolicies from './typePolicies'
import dataIdFromObject from './dataIdFromObject'

import fragmentTypes from '../codegen/fragmentTypes.json'

const possibleTypes = {};

    fragmentTypes.__schema.types.forEach(supertype => {
      if (supertype.possibleTypes) {
        possibleTypes[supertype.name] =
          supertype.possibleTypes.map(subtype => subtype.name);
      }
    });


const cache = new InMemoryCache({
  possibleTypes,
  typePolicies,
  dataIdFromObject
})

export const cacheLoaded = persistCache({
  cache,
  storage: localForage as any
})

export default cache;
