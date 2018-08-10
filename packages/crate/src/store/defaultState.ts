import Options from '../types/options'
import { State } from '../types/store'

const defaultState = (options: Options): State => ({
  options,

  interactive: !options.defer,
  visible: true,
  open: false,

  unread: 0,
  notifications: []
})

export default defaultState
