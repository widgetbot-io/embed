import matchSorter from 'match-sorter'
import * as React from 'react'
import { Hash } from '@ui/shared/Channel'

import { Description, Icon, Name } from '../elements'
import { Suggestion } from '../types'

interface Command {
  id: string
  name: string
  type: 'role' | 'user' | string
}

const commands: Command[] = [
  {
    id: '294916911194570754',
    name: 'samdd#3245',
    type: 'user'
  }
]

const Commands: Suggestion<Command> = {
  getSuggestions: query =>
    matchSorter(commands, query, {
      keys: [
        {
          minRanking: matchSorter.rankings.STRING_CASE_ACRONYM,
          maxRanking: matchSorter.rankings.STARTS_WITH,
          threshold: matchSorter.rankings.STARTS_WITH,
          key: 'name'
        }
      ]
    }),

  extract: (_, { value }) => value[0] === '/' && value.substring(1),
  toString: ({ name }) => `/${name}`,

  description: query => (
    <Description>
      Commands
      {query ? (
        <React.Fragment>
          {` matching `}
          <strong>{`/${query}`}</strong>
        </React.Fragment>
      ) : null}
    </Description>
  ),

  suggestion: ({ name }) => (
    <React.Fragment>
      <Icon>
        <Hash />
      </Icon>
      <Name>{name}</Name>
    </React.Fragment>
  )
}

export default Commands
