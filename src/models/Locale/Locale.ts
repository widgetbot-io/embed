import { types } from 'mobx-state-tree'
import { Translation } from './Translation'
import { loadCatalog } from '@lib/i18n'

export const Locale = types
  .model('Locale', {
    translations: types.array(Translation),
    language: 'en'
  })
  .views(self => ({
    get catalog() {
      const translation = self.translations.find(
        ({ name }) => name === self.language
      )

      return translation ? translation.catalog : null
    }
  }))
  .actions(self => ({
    async setLanguage(language: string) {
      const catalog = await loadCatalog(language)
      ;(self as any).upsertCatalog(language, catalog)
      ;(self as any).switchLanguage(language)
    },
    upsertCatalog(language: string, catalog: any) {
      const existingTranslation = self.translations.find(t => t.name === name)

      if (existingTranslation) {
        existingTranslation.catalog = catalog
      } else {
        self.translations.push({ catalog, name: language })
      }
    },
    switchLanguage(language: string) {
      self.language = language
    }
  }))
