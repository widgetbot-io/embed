import * as R from 'ramda'
import { parse } from 'qs'
import { Locales, translations } from 'locales'

interface Url {
  api?: string
  token?: string

  server?: string
  channel?: string

  height?: number
  width?: number

  preset?: 'crate'
  lang?: Locales
}

const queryParser = (query: string) => {
  const parsed = parse(query, {})

  const url: Url = R.pickBy(Boolean, {
    api: new String(parsed.api),
    token: new String(parsed.token),

    height: +parsed.height,
    width: +parsed.width,

    preset: ['crate'].includes(parsed.preset) && new String(parsed.preset),
    get lang() {
      if (translations.has(parsed.lang)) return new String(parsed.lang)

      if (parsed.lang)
        console.error(
          parsed.lang,
          `is not a valid / translated locale! falling back to browser default`
        )

      const [lang] = (
        (<any>navigator).userLanguage || navigator.language
      ).split('-')

      return translations.has(lang) ? lang : 'en'
    }
  })

  return url
}

export default queryParser
