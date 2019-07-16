import { CacheResolverMap } from 'apollo-cache-inmemory'

const cacheRedirects: CacheResolverMap = {
  Server: {
    channel: (_, args, { getCacheKey }) =>
      getCacheKey({ __typename: 'Channel', id: args.id }),

    member: (_, args, { getCacheKey }) =>
      getCacheKey({ __typename: 'Member', id: args.id })
  }
}

export default cacheRedirects
