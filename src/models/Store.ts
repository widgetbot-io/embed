import { types } from 'mobx-state-tree'
import { Sidebar } from './Sidebar'
import { Locale } from './Locale'
import { Modal } from './Modal'

export const Store = types
  .model('Store', {
    sidebar: Sidebar,
    locale: Locale,
    modal: Modal
  })
  .actions(self => ({}))


export const store = Store.create({
    // @ts-ignore
  sidebar: {},
        // @ts-ignore
  locale: {},
        // @ts-ignore
  modal: {}
})

// Debugging
;(window as any).store = store
