import Stylis from '@emotion/stylis'
import { Store } from 'redux'

import { State } from '../types/store'
import { root } from './renderer'
import { API } from './types'

const { version } = require('../../package.json')

export const stylis = new Stylis()

class EmbedAPI {
  static stylis = stylis

  static version = version
  // Redux
  store: Store<State>

  // Renderer
  static root = root
  node = root.createInstance()

  // API
  api: API
  on: API['on']
  emit: API['emit']
}

export default EmbedAPI
