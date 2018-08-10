import Message from './message'

export namespace IServer {
  interface Reaction {
    name: string
    id: string
    count: number
  }

  export interface Options {
    id: string
    targetOrigin?: string
  }

  export interface Events {
    signIn: {
      name: string
      avatar: string
      type: 'bot' | 'sysadmin' | 'guest' | 'member'
      id: string
    }
    message: {
      channel: string
      message: Message
    }
    messageUpdate: {
      channel: string
      message: Message
    }
    messageDelete: {
      channel: string
      id: string
    }
    messageReactionAdd: {
      channel: string
      id: string
      reaction: Reaction
    }
    messageReactionRemove: {
      channel: string
      id: string
      reaction: Reaction
    }
  }

  type Event = keyof Events
}

export namespace IClient {
  export interface Options {
    id: string
    iframe: HTMLIFrameElement
  }

  export interface Events {
    sendMessage:
      | string
      | {
          channel: string
          message: string
        }
  }

  type Event = keyof Events
}
