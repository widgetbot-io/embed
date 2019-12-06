import { types } from 'mobx-state-tree'
import { AuthMenu, Sidebar } from "./Sidebar";
import { Locale } from './Locale'
import { Modal } from './Modal'

export const Store = types
  .model('Store', {
    sidebar: Sidebar,
    locale: Locale,
    modal: Modal,
    authmenu: AuthMenu
  })
  .actions(self => ({}))


export const store = Store.create({
  sidebar: {},
  locale: {},
  modal: {},
  authmenu: {}
})

// Debugging
;(window as any).store = store;
// TODO: this prolly needs to be removed
