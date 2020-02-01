import * as React from "react";
import { inject, observer } from "mobx-react";
import { Box, Close } from "@ui/Modal";
import { AuthStore } from "@store/auth";
import { Overlay, Create, Greeting, Group, Input, Root, Title, SSO, Discord } from "./elements";
import {store} from "@models";

interface AuthStoreState {
  awaiting: boolean;
}
interface AuthStoreProps {
  AuthStore?: AuthStore;
}

@inject("AuthStore")
@observer
class Authenticate extends React.Component<AuthStoreProps, AuthStoreState> {
  state: AuthStoreState = {
    awaiting: false
  };
  nameField: HTMLInputElement;

  signUp(e: Event) {
    e.preventDefault();

    const name = this.nameField.value;
    if (name.length < 2) return;

    this.setState({
      awaiting: true
    });
    this.props.AuthStore.guestLogin(name).then(async () => {
      await this.props.AuthStore.setGuestUser(name);
      this.props.AuthStore.needsUpdate = true;

      this.props.AuthStore.toggleMenu(false);
      // this.setState({
      //   awaiting: false
      // });
    });
  }

  discordSignOn(e?: Event) {
    if (e) e.preventDefault();
    this.setState({
      awaiting: true
    });
    this.props.AuthStore.discordLogin().then(async () => {
      await this.props.AuthStore.fetchDiscordUser();
      this.props.AuthStore.needsUpdate = true;

      this.props.AuthStore.toggleMenu(false);
      this.setState({
        awaiting: false
      });
    });
  }

  render() {
    const { awaiting } = this.state;
    return !this.props.AuthStore.menuOpen ? null : (this.props.AuthStore.guestEnabled ? (
        <Overlay>
          <Root loading={awaiting}>
            <Close onClick={() => this.props.AuthStore.toggleMenu(false)} />
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
        </Overlay>
    ) : null)
  }
}

export default Authenticate;
