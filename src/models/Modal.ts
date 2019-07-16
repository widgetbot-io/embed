import { types } from 'mobx-state-tree'

export const Modal = types
  .model('Modal', {
    type: types.maybeNull(types.string),
    data: types.maybeNull(types.string),
    isOpen: false
  })
  .actions(self => ({
    openImage(url: string) {
      self.isOpen = true
      self.type = 'image'
      self.data = url
    },
    openSettings() {
      self.isOpen = true
      self.type = 'settings'
      self.data = null
    },
    openTopic(topic) {
      self.isOpen = true
      self.type = 'topic'
      self.data = topic
    },
    close() {
      self.isOpen = false
    }
  }))
