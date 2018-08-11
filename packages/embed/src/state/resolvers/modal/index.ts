import * as R from 'ramda'
import { ClientStateConfig } from 'apollo-link-state'

const capitalize = R.compose(
  R.join(''),
  R.juxt([
    R.compose(
      R.toUpper,
      R.head
    ),
    R.tail
  ])
)

const modal: ClientStateConfig = {
  defaults: {
    modal: {
      open: false,
      type: null,
      data: null,
      __typename: 'Modal'
    }
  },
  resolvers: {
    Mutation: {
      openModal(_, { type, data }, { cache }) {
        cache.writeData({
          id: '$ROOT_QUERY.modal',
          data: {
            open: true,
            type,
            data,
            __typename: 'Modal'
          }
        })
        return null
      },

      closeModal(_, __, { cache }) {
        cache.writeData({
          id: '$ROOT_QUERY.modal',
          data: {
            open: false,
            __typename: 'Modal'
          }
        })
        return null
      }
    }
  }
}

export default modal
