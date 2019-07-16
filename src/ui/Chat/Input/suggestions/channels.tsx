import { Hash } from '@ui/shared/Channel'
import matchSorter from 'match-sorter'
import * as React from 'react'

import { Description, Icon, Info, Name } from '../elements'
import { Suggestion } from '../types'

const Channels: Suggestion<any /*Channel*/> = {
  getSuggestions: query =>
    matchSorter([], query, {
      keys: [
        {
          minRanking: matchSorter.rankings.STRING_CASE_ACRONYM,
          maxRanking: matchSorter.rankings.STARTS_WITH,
          threshold: matchSorter.rankings.STARTS_WITH,
          key: 'name'
        }
      ]
    }),

  extract: query => query[0] === '#' && query.substring(1),
  toString: ({ name }) => `#${name}`,

  description: query => (
    <Description>
      Text Channels
      {query ? (
        <React.Fragment>
          {` matching `}
          <strong>{`#${query}`}</strong>
        </React.Fragment>
      ) : null}
    </Description>
  ),

  // @ts-ignore
  suggestion: ({ name, category }) => (
    <React.Fragment>
      <Icon>
        <Hash />
      </Icon>
      <Name>{name}</Name>
      <Info>{category}</Info>
    </React.Fragment>
  )
}

export default Channels
