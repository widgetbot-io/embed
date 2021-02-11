import { Message_author } from '@generated';
import { defaultDataIdFromObject, IdGetter } from 'apollo-cache-inmemory'

const dataIdFromObject: IdGetter = (object: {
  __typename: string
  [key: string]: any
}) => {
  switch (object.__typename) {
    case 'Reaction':
      return null // Reactions are unique across messages
    case 'User':
      const user = object as Message_author
      if (user.bot && user.discrim === '0000') {
        return `User:${user.id}:${user.name}`;
      }
    default:
      return defaultDataIdFromObject(object)
  }
}

export default dataIdFromObject
