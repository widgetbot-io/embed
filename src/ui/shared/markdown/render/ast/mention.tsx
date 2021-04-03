import { Message_mentions } from '@generated'
import { Channel, Mention, Role } from '@ui/shared/markdown/render/elements'
import SimpleMarkdown from 'simple-markdown'

export const mention = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: source => /^<@!?([0-9]+?)>/.exec(source),
  parse: ([str, id], recurseParse, {mentions}) => ({ id, mentions }),
  react: ({ id, mentions }: {id: string, mentions: Message_mentions[]}, recurseOutput, state) =>
    <Mention key={state.key} id={id} data={mentions?.find(m => m.type === 'member' && m.id === id)}>
      {({ name }) => `@${name}`}
    </Mention>
}

export const channel = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: source => /^<#?([0-9]+?)>/.exec(source),
  parse: ([str, id], recurseParse, {mentions}) => ({ id, mentions }),
  react: ({ id, mentions }: {id: string, mentions: Message_mentions[]}, recurseOutput, state) =>
    <Channel key={state.key} id={id} data={mentions?.find(m => m.type === 'channel' && m.id === id)}>
      {({ name }) => `#${name}`}
    </Channel>
}

export const role = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: source => /^<@&?([0-9]+?)>/.exec(source),
  parse: ([str, id], recurseParse, {mentions}) => ({ id, mentions }),
  react: ({ id, mentions }: {id: string, mentions: Message_mentions[]}, recurseOutput, state) =>
    <Role key={state.key} id={id} data={mentions?.find(m => m.type === 'role' && m.id === id)}>
      {({ displayName }) => `@${displayName}`}
    </Role>
}
