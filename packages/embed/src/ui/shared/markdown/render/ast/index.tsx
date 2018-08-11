import { channel, mention } from '@ui/shared/markdown/render/ast/mention'
import text from '@ui/shared/markdown/render/ast/text'
import { defaultRules, inlineRegex } from 'simple-markdown'

import { customEmoji } from './customEmoji'

const baseRules = {
  newline: defaultRules.newline,
  paragraph: defaultRules.paragraph,
  escape: defaultRules.escape,
  link: defaultRules.link,
  url: defaultRules.url,
  strong: defaultRules.strong,
  em: defaultRules.em,
  u: defaultRules.u,
  br: defaultRules.br,
  inlineCode: defaultRules.inlineCode,

  autolink: {
    ...defaultRules.autolink,
    match: inlineRegex(/^<(https?:\/\/[^ >]+)>/)
  },
  emoticon: {
    order: defaultRules.text.order,
    match: source => /^(¯\\_\(ツ\)_\/¯)/.exec(source),
    parse: capture => ({ type: 'text', content: capture[1] })
  },
  codeBlock: {
    order: defaultRules.codeBlock.order,
    match: source => /^```(([A-z0-9-]+?)\n+)?\n*([^]+?)\n*```/.exec(source),
    parse: ([, , lang, content]) => ({
      lang: (lang || '').trim(),
      content: content || ''
    })
  },
  customEmoji,
  text,

  mention,
  channel,

  s: {
    order: defaultRules.u.order,
    match: inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
    parse: defaultRules.u.parse
  }
}

export default baseRules
