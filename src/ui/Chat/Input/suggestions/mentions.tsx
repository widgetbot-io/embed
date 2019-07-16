import matchSorter from 'match-sorter'
import * as React from 'react'

import { Description, Icon, Info, Name } from '../elements'
import { Suggestion } from '../types'

const Mentions: Suggestion<any /*Member*/> = {
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

  extract: query => query[0] === '@' && query.substring(1),
  toString: ({ tag }) => `@${tag}`,

  description: query => (
    <Description>
      Members
      {query ? (
        <React.Fragment>
          {` matching `}
          <strong>{`@${query}`}</strong>
        </React.Fragment>
      ) : null}
    </Description>
  ),

  suggestion: ({ name, tag, avatarURL }) => (
    <React.Fragment>
      <Icon src={avatarURL} />
      <Name>{name}</Name>
      <Info>{tag}</Info>
    </React.Fragment>
  )
}

export default Mentions
