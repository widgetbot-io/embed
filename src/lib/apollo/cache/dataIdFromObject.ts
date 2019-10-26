import { defaultDataIdFromObject, IdGetter } from 'apollo-cache-inmemory'

const dataIdFromObject: IdGetter = (object: {
  __typename: string
  [key: string]: any
}) => {
  switch (object.__typename) {
    case 'Reaction':
      return null // Reactions are unique across messages
    case 'User':
      if (object.bot && object.discriminator === '0000') {
        return `User:${object.id}:${object.username}`;
      }
    default:
      return defaultDataIdFromObject(object)
  }
}

export default dataIdFromObject
