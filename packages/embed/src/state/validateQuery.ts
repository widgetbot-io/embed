import gql from 'graphql-tag'
import { validate } from 'graphql/validation'
import preval from 'babel-plugin-preval/macro'

const schema = preval`
  const { buildSchema } = require('graphql/utilities/buildASTSchema')
  const schema = require('./schema')

  module.exports = buildSchema(schema)
`

const validateQuery = (query: string | any) => {
  if (typeof query === 'string') query = gql(query)

  return validate(schema, query)
}

export default validateQuery
