import * as React from 'react'

import { Chat } from '@ui/Overlays'
import Header, { Name, Topic } from '@ui/Header'
import Wrapper from '@ui/Wrapper'
import { Trans, withI18nProps, withI18n } from '@lingui/react'

const ChooseChannel = ({ i18n }: withI18nProps) => (
  <Wrapper>
    <Header>
      <Name>
        <Trans id="PickChannelScreen.Title">Select a channel</Trans>
      </Name>
      <Topic>
        {i18n.t('PickChannelScreen.Description')`Pick a channel from the left`}
      </Topic>
    </Header>
    <Chat />
  </Wrapper>
)

export default withI18n()(ChooseChannel)
