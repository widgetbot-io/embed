import { ApolloError } from 'apollo-client'

export const formatError = (error: ApolloError) => {
  let message = error.message

  if (error.graphQLErrors.length) {
    const [err] = error.graphQLErrors
    if (err.name && err.message) {
      message = `${err.message} (${err.name})`
    }
  }

  return message
}
