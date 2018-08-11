import { Translation } from '.'

export const Define = <T extends string>(array: T[]): T[] => array

export const Load = <Locales extends string>(locales: Locales[]) => {
  const translations = new Map<Locales, Translation>()

  for (let locale of locales) {
    translations.set(locale, require(`./translations/${locale}.ts`).default)
  }

  return translations
}
