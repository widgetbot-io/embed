import { types } from 'mobx-state-tree'
import { Member, Author } from '@generated'

export const Modal = types
  .model('Modal', {
    type: types.maybeNull(types.string),
    data: types.maybeNull(types.string),
    channel: types.maybeNull(types.string),
    displayName: types.maybeNull(types.string),
    username: types.maybeNull(types.string),
    discriminator: types.maybeNull(types.string),
    tag: types.maybeNull(types.string),
    avatar: types.maybeNull(types.string),
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
    openTopic(topic, channel) {
      self.isOpen = true
      self.type = 'topic'
      self.data = topic
      self.channel = channel
    },
    openProfile(member: Member, author: Author) {
      self.isOpen = true
      self.type = 'profile'
      self.displayName = member.displayName
      self.username = author.username
      self.discriminator = author.discriminator
      self.tag = author.bot ? 'Bot' : null
      self.avatar = author.displayAvatarURL+'?size=256'
    },
    close() {
      self.isOpen = false
    }
  }))
