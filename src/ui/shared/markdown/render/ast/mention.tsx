import { Message_mentions } from '@generated'
import { MentionType } from '@generated/globalTypes'
import { generalStore } from '@store'
import { Channel, Mention, Role } from '@ui/shared/markdown/render/elements'
import SimpleMarkdown from 'simple-markdown'

export const mention = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: source => /^<@!?([0-9]+?)>/.exec(source),
  parse: ([str, id], recurseParse, {mentions}) => ({ id, mentions }),
  react: ({ id, mentions }: {id: string, mentions: Message_mentions[]}, recurseOutput, state) =>
    <Mention key={state.key} id={id} data={mentions?.find(m => m.type === MentionType.Member && m.id === id)}>
      {({ name }) => `@${name}`}
    </Mention>
}

export const channel = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: source => /^<#?([0-9]+?)>/.exec(source),
  parse: ([str, id], recurseParse, {mentions}) => ({ id, mentions }),
  react: ({ id, mentions }: {id: string, mentions: Message_mentions[]}, recurseOutput, state) =>
    <Channel key={state.key} id={id} data={mentions?.find(m => m.type === MentionType.Channel && m.id === id)}>
      {({ name }) => `#${name}`}
    </Channel>
}

const parseColor = (color: number) => color ? '#'+color.toString(16).padStart(6, '0') : null

export const role = {
  order: SimpleMarkdown.defaultRules.text.order,
  match: source => /^<@&?([0-9]+?)>/.exec(source),
  parse: ([str, id], recurseParse, {mentions}) => ({ id, mentions }),
  react: ({ id, mentions }: {id: string, mentions: Message_mentions[]}, recurseOutput, state) =>
    <Role key={state.key} id={id} data={mentions?.find(m => m.type === MentionType.Role && m.id === id)} color={parseColor(generalStore.guild?.roles.find(r => r.id === id)?.color)}>
      {({ displayName }) => `@${displayName}`}
    </Role>
}
