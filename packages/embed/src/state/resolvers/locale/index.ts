import * as R from 'ramda'
import { ClientStateConfig } from 'apollo-link-state'
import gql from 'graphql-tag'
import i18n from '@lib/i18n'

const unique = R.uniqBy(l => l[0])

const GetLocale = gql`
  query GetLocale {
    locale @client {
      language
      translations
    }
  }
`

const locale: ClientStateConfig = {
  defaults: {
    locale: {
      language: 'en',
      translations: [],
      __typename: 'Locale'
    }
  },
  resolvers: {
    Mutation: {
      async setLanguage(_, { name }, { cache }) {
        const doc = cache.readQuery({ query: GetLocale })

        i18n.activate(name)

        cache.writeData({
          id: '$ROOT_QUERY.locale',
          data: { ...doc, language: name }
        })

        return null
      },

      addTranslation(_, { id, translation }, { cache }) {
        const doc = cache.readQuery({ query: GetLocale })

        const translations = unique([
          [id, translation],
          ...doc.locale.translations
        ]) as string[][]

        cache.writeData({
          id: '$ROOT_QUERY.locale',
          data: { ...doc, translations }
        })

        return null
      },

      removeTranslation(_, { id }, { cache }) {
        const beforeLocale = cache.readQuery({ query: GetLocale })

        const translations = beforeLocale.locale.translations.filter(
          l => l[0] !== id
        )

        cache.writeData({
          id: '$ROOT_QUERY.locale',
          data: { ...beforeLocale, translations }
        })
        return null
      }
    }
  }
}

export default locale
