import GET_MODAL from '@queries/ModalInfo.graphql'
import CLOSE_MODAL from '@queries/CloseModal.graphql'

import { CloseModal } from '@queries/__generated__/CloseModal'

import Markdown from '@ui/shared/markdown/render'
import { ThemeProvider } from 'emotion-theming'
import * as React from 'react'
import { DataProps, graphql, Mutation } from 'react-apollo'
import Hotkeys from 'react-hot-keys'

import { ModalInfo } from './__generated__/ModalInfo'
import About from './About'
import Authenticate from './Authenticate'
import { Box, Close, Content, Image, OpenImage, Root } from './elements'
import { Trans } from '@lingui/react'

class Modal extends React.PureComponent<DataProps<ModalInfo>> {
  theme = theme => ({
    ...theme,
    modal: this.props.data.modal
  })

  content = ({ complete }) => {
    const { modal } = this.props.data

    if (modal.type === 'authenticate') {
      return <Authenticate />
    }

    if (modal.type === 'image') {
      return (
        <React.Fragment>
          <Image src={modal.data} />
          <OpenImage href={modal.data} target="_blank" onClick={complete}>
            <Trans id="Modal.openOriginal">Open original</Trans>
          </OpenImage>
        </React.Fragment>
      )
    }

    if (modal.type === 'topic') {
      return (
        <Content>
          <Markdown>{modal.data}</Markdown>
        </Content>
      )
    }

    if (modal.type === 'about') {
      return <About />
    }

    return null
  }

  render() {
    return (
      // Don't remove .bind()!
      // Passes a new reference on each render
      <ThemeProvider theme={this.theme.bind(this)}>
        <Mutation<CloseModal> mutation={CLOSE_MODAL}>
          {close => (
            <Hotkeys keyName="escape" onKeyDown={close}>
              <Root
                onClick={e => (e.target === e.currentTarget ? close() : null)}
                className="modal"
              >
                <Box className="box">
                  <Close onClick={() => close()} className="close" />
                  <this.content complete={close} />
                </Box>
              </Root>
            </Hotkeys>
          )}
        </Mutation>
      </ThemeProvider>
    )
  }
}

export default graphql(GET_MODAL)(Modal)
