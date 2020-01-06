import { Channel, Mention, Role } from '@ui/shared/markdown/render/elements'
import * as React from 'react'
import SimpleMarkdown from 'simple-markdown'

export const mention = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: source => /^<@!?([0-9]+?)>/.exec(source),
  parse: ([mention, id]) => ({ mention, id }),
  react: ({ mention, id }, recurseOutput, state) => (
      <p>{{ id }}</p>
      // <Mention key={state.key} id={id}>
    //   {({ displayName }) => `${displayName}`}
    // </Mention>
  )
}

export const channel = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: source => /^<#?([0-9]+?)>/.exec(source),
  parse: ([mention, id]) => ({ mention, id }),
  react: ({ mention, id }, recurseOutput, state) => (
      <p>{{ id }}</p>
      // <Channel key={state.key} id={id}>
    //   {({ name }) => `#${name}`}
    // </Channel>
  )
}

export const role = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: source => /^<@&?([0-9]+?)>/.exec(source),
  parse: ([mention, id]) => ({ mention, id }),
  react: ({ mention, id }, recurseOutput, state) => <p>{{ id }}</p>
  // <Role key={state.key} id={id}>
  //   {({ displayName }) => `${displayName}`}
  // </Role>
}
