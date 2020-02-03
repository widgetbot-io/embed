import * as React from 'react'

import { Error } from '..'
import Header, { Name, Topic } from './header'
import Wrapper from './wrapper'
import { Message } from './elements'
import { Trans, withI18n, withI18nProps } from '@lingui/react'

const ErrorAhoy = ({ message, i18n }: { message?: string } & withI18nProps) => (
  <Wrapper>
    <Header>
      <Name>
        Error Ahoy!
      </Name>
      <Topic>
        Something unexpected occurred! WidgetBot support (for site admins): https://discord.gg/NYBEhN7
      </Topic>
    </Header>
    <Error>
      {message ? <Message length={message.length}>{message}</Message> : null}
    </Error>
  </Wrapper>
)

export default withI18n()(ErrorAhoy)
