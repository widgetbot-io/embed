import * as React from 'react'

import { Description, Icon, Info, Name } from '../elements'
import { Suggestion } from '../types'
import { Emoji, emojis } from '@services/Emoji'

const Emojis: Suggestion<Emoji> = {
  getSuggestions: query => emojis.query(query),
  extract: query =>
    query.length > 2 &&
    query[0] === ':' &&
    query[1] !== ':' &&
    query.substring(1),

  toString: ({ keywords: [keyword] }) => `:${keyword}:`,

  description: query => (
    <Description>
      Emoji
      {query ? (
        <React.Fragment>
          {` matching `}
          <strong>{`:${query}`}</strong>
        </React.Fragment>
      ) : null}
    </Description>
  ),

  suggestion: ({ category, emoji, keywords: [keyword] }) => (
    <React.Fragment>
      {category === 'custom' ? (
        <Icon src={`https://cdn.discordapp.com/emojis/${emoji}.png`} />
      ) : (
        <Icon>{emoji}</Icon>
      )}
      <Name>{`:${keyword}:`}</Name>
      <Info>{category}</Info>
    </React.Fragment>
  )
}

export default Emojis
