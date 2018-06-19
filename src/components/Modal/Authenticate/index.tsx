import { connect } from 'fluent'
import * as React from 'react'

import {
  Create,
  Discord,
  Greeting,
  Group,
  Input,
  Root,
  SSO,
  Title
} from './elements'

export default connect()
  .with(({ state, signals, props }) => ({
    toggle: signals.modal,
    signUp: signals.signUp,
    singleSignOn: signals.singleSignOn
  }))
  .toClass(
    props =>
      class Authenticate extends React.PureComponent<typeof props> {
        state = {
          awaiting: false
        }
        nameField: HTMLInputElement

        signUp(event: Event) {
          event.preventDefault()

          const name = this.nameField.value

          const { toggle, signUp } = this.props
          toggle({ open: false })

          signUp({ name })
        }

        singleSignOn(event: Event) {
          event.preventDefault()

          const { singleSignOn } = this.props
          singleSignOn()

          this.setState({
            awaiting: true
          })
        }

        render() {
          const { awaiting } = this.state
          return (
            <Root loading={awaiting}>
              <Title>Welcome!</Title>
              <Greeting>Pick a name to start chatting</Greeting>
              <Group label="name" onSubmit={this.signUp.bind(this)}>
                <Input
                  innerRef={ref => (this.nameField = ref)}
                  autoFocus={true}
                  spellCheck={false}
                  minLength={2}
                  maxLength={32}
                  required
                />
                <Create variant="large">Create</Create>
                {/*<SSO>
                  Discord account?
                  <Discord onClick={this.singleSignOn.bind(this)}>
                    Log in
                  </Discord>
                </SSO>*/}
              </Group>
            </Root>
          )
        }
      }
  )
