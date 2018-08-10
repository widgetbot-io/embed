import API from './api'
import { IClient, IServer } from './types'

class Server extends API<IClient.Events> {
  targetOrigin = '*'

  constructor(options: IServer.Options) {
    super()
    Object.assign(this, options)

    window.addEventListener('message', ({ data }) => this.socketEvent(data))
  }

  /**
   * Emits an event to the client
   * @param event Event name
   * @param data Event data
   */
  public emit<T extends IServer.Event>(event: T, data: IServer.Events[T]) {
    console.debug(`[embed-api] emit '${event}'`, data)

    if (!window.parent) return false

    const parsed = JSON.stringify({
      widgetbot: true,
      id: this.id,
      event,
      data
    })

    window.parent.postMessage(parsed, this.targetOrigin)

    return true
  }

  public client = {
    emit: <T extends IClient.Event>(event: T, data: IClient.Events[T]) => {
      const listeners: Function[] = this.listeners[event]

      if (listeners) {
        listeners.forEach(listener => listener(data))
      }
    }
  }
}

export default Server
