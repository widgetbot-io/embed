import { loadCatalog } from '@lib/i18n'
import { types } from 'mobx-state-tree'

export const Translation = types
  .model('Translation', {
    name: types.string,
    catalog: types.frozen()
  })
  .actions(self => ({}))
