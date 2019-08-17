import { types } from 'mobx-state-tree'

export const Sidebar = types
  .model('Sidebar', {
    isOpen: window.innerWidth > 520
  })
  .actions(self => ({
    open() {
      self.isOpen = true
    },
    close() {
      self.isOpen = false
    },
    toggle() {
      self.isOpen = !self.isOpen
    }
  }))
