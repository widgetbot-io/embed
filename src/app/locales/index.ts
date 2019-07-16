import { Define, Load } from './helpers'
import BaseTranslation from './translations/en'

// Import the translations from ./translations/
export const locales = Define(['en'])

export type Locales = (typeof locales)[number]

export type Translation = typeof BaseTranslation

export const translations = Load(locales)
