import { TypePolicies } from '@apollo/client' 

const typePolicies: TypePolicies = {
  Server: {
    fields: {
      channel(existingData, {args, toReference}) {
        return existingData ||
          toReference({__typename: 'Channel', id: args.id})
      },
      member(existingData, {args, toReference}) {
        return existingData ||
          toReference({__typename: 'Member', id: args.id})
      }
    }
  }
}

export default typePolicies
