import * as React from "react";
import { inject, observer } from "mobx-react";
import { Box, Close } from "@ui/Modal";
import { AuthStore } from "@store/auth";
import { Overlay, Create, Greeting, Group, Input, Root, Title, SSO, Discord } from "./elements";
import {store} from "@models";
import { Locale } from "@lib/Locale";
import {generalStore} from "@store";

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
    if (name.length < 1) return;

    this.setState({
      awaiting: true
    });
    this.props.AuthStore.guestLogin(name).then(async () => {
      await this.props.AuthStore.setGuestUser(name);
      generalStore.needsUpdate = true;

      generalStore.toggleMenu(false);
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
      generalStore.needsUpdate = true;

      generalStore.toggleMenu(false);
      this.setState({
        awaiting: false
      });
    });
  }

  render() {
    const { awaiting } = this.state;
    return !generalStore.menuOpen ? null : (generalStore.guestEnabled ? (
        <Overlay>
          <Root loading={awaiting}>
            <Close onClick={() => generalStore.toggleMenu(false)} />
            <Title>{Locale.translate('frontend.auth.welcome')}</Title>
            <Greeting>{Locale.translate('frontend.auth.pickname')}</Greeting>
            <Group label={Locale.translate('frontend.auth.name')} onSubmit={this.signUp.bind(this)}>
              <Input
                  innerRef={ref => (this.nameField = ref)}
                  autoFocus={true}
                  spellCheck={false}
                  minLength={1}
                  maxLength={80}
                  required
              />
              <Create variant="large">{Locale.translate('frontend.auth.create')}</Create>
              <SSO>
              {Locale.translate('frontend.auth.discordacc')}
                <Discord onClick={this.discordSignOn.bind(this)}>
                  {Locale.translate('frontend.auth.login2')}
                </Discord>
              </SSO>
            </Group>
          </Root>
        </Overlay>
    ) : null)
  }
}

export default Authenticate;
