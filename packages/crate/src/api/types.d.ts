import { API as IAPI, IClient } from '@widgetbot/react-embed'

export interface Events extends IClient.Events {}

export type Event = keyof Events

export type API = IAPI & {
  on: <T extends Event>(event: T, callback: (data: Events[T]) => void) => void
}
