import * as React from 'react'

import { Box, Close } from '@ui/Modal'
import { Create, Greeting, Group, Input, Root, Title } from './elements'

class Authenticate extends React.PureComponent {
  state = {
    awaiting: false
  }
  nameField: HTMLInputElement

  signUp(event: Event) {
    event.preventDefault()

    const name = this.nameField.value

    // TODO: FIX
    // const { toggle, signUp } = this.props
    // toggle({ open: false })

    // signUp({ name })
  }

  singleSignOn(event: Event) {
    event.preventDefault()
    // TODO: FIX
    // const { singleSignOn } = this.props
    // singleSignOn()

    this.setState({
      awaiting: true
    })
  }

  render() {
    const { awaiting } = this.state
    return (
      <Box>
        <Close onClick={() => close()} />
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
      </Box>
    )
  }
}

export default Authenticate
