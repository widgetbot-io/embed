import API from './api'
import { IClient, IServer } from './types'

class Client extends API<IServer.Events> {
  iframe: HTMLIFrameElement

  constructor(options: IClient.Options) {
    super()
    Object.assign(this, options)
    window.addEventListener('message', ({ data }) => this.socketEvent(data))
  }

  /**
   * Emits an event to the client
   * @param event Event name
   * @param data Event data
   */
  public emit<T extends IClient.Event>(event: T, data: IClient.Events[T]) {
    if (!window.parent) return false

    const parsed = JSON.stringify({
      widgetbot: true,
      id: this.id,
      event,
      data
    })

    if (this.iframe.contentWindow) {
      this.iframe.contentWindow.postMessage(parsed, '*')
      return true
    }

    return false
  }

  public server = {
    emit: <T extends IServer.Event>(event: T, data: IServer.Events[T]) => {
      const listeners: Function[] = this.listeners[event]

      if (listeners) {
        listeners.forEach(listener => listener(data))
      }
    }
  }
}

export default Client
