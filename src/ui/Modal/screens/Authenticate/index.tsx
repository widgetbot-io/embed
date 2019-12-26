import * as React from "react";
import { inject, observer } from "mobx-react";
import { Box, Close } from "@ui/Modal";
import { AuthStore } from "@store/auth";
import { Overlay, Create, Greeting, Group, Input, Root, Title, SSO, Discord } from "./elements";

interface AuthStoreState {
  awaiting: boolean;
  closed: boolean;
}
interface AuthStoreProps {
  AuthStore?: AuthStore;
}

@inject("AuthStore")
@observer
class Authenticate extends React.Component<AuthStoreProps, AuthStoreState> {
  state: AuthStoreState = {
    awaiting: false,
    closed: false
  };
  nameField: HTMLInputElement;

  signUp(event: Event) {
    event.preventDefault();

    const name = this.nameField.value;
    if (name.length < 2) return;
    this.props.AuthStore.guestLogin(name);
  }

  singleSignOn(event: Event) {
    event.preventDefault();
    // TODO: FIX
    // const { singleSignOn } = this.props
    // singleSignOn()

    this.setState({
      awaiting: true
    });
  }

  discordSignOn(e: Event) {
    e.preventDefault();
    this.props.AuthStore.discordLogin().then(async r => {
      await this.props.AuthStore.fetchDiscordUser();
      this.props.AuthStore.needsUpdate = true;
      // await this.props.AuthStore.refreshChannels();
    });
  }

  render() {
    const { awaiting } = this.state;
    return this.state.closed ? null : (
      <Overlay>
        <Box>
          <Root loading={awaiting}>
            <Close onClick={() => this.setState({ closed: true })} />
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
              <SSO>
                Discord account?
                <Discord onClick={this.discordSignOn.bind(this)}>
                    Log in
                </Discord>
              </SSO>
            </Group>
          </Root>
        </Box>
      </Overlay>
    );
  }
}

export default Authenticate;
