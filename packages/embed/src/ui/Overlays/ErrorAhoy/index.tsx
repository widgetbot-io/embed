import * as React from 'react'

import { Error } from '..'
import Header, { Name, Topic } from '../../Header'
import Wrapper from '../../Wrapper'
import { Message } from './elements'
import { Trans, withI18n, withI18nProps } from '@lingui/react'

const ErrorAhoy = ({ message, i18n }: { message?: string } & withI18nProps) => (
  <Wrapper>
    <Header>
      <Name>
        <Trans id="ErrorScreen.Title">Error</Trans>
      </Name>
      <Topic>
        {i18n.t('ErrorScreen.Description')`Something unexpected occurred`}
      </Topic>
    </Header>
    <Error>
      {message ? <Message length={message.length}>{message}</Message> : null}
    </Error>
  </Wrapper>
)

export default withI18n()(ErrorAhoy)
