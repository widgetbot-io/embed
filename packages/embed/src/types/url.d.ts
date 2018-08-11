import { Locales } from '../app/locales'

export interface RawUrl {
  [key: string]: any

  api?: string
  token?: string

  server?: string
  channel?: string

  height?: string
  width?: string

  preset?: string
  lang?: string
}

export interface ParsedUrl {
  api?: string
  token?: string

  server?: string
  channel?: string

  height?: number
  width?: number

  preset?: 'crate'
  lang?: Locales
}
