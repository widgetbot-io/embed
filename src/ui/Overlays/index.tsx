import * as React from 'react'
import { MdChat, MdError, MdVisibilityOff } from 'react-icons/md'

import { Wrap } from './elements'
import loading from './Loading'

export const Loading = Wrap(loading)
export const Chat = Wrap(MdChat)
export const Error = Wrap(MdError)
export const NoMessages = Wrap(MdVisibilityOff)

export { Info } from './elements'
