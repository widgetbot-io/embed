import { defaultDataIdFromObject, IdGetter } from 'apollo-cache-inmemory'

// @ts-ignore
const dataIdFromObject: IdGetter = (object: {
  __typename: string
  [key: string]: any
}) => {
  switch (object.__typename) {
    case 'Reaction':
      return null // Reactions are unique across messages
    default:
      return defaultDataIdFromObject(object)
  }
}

export default dataIdFromObject
