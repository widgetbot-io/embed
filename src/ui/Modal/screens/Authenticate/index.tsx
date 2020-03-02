import * as React from "react";
import { inject, observer } from "mobx-react";
import { Box, Close } from "@ui/Modal";
import {authStore, AuthStore} from "@store/auth";
import { Overlay, Create, Greeting, Group, Input, Root, Title, SSO, Discord } from "./elements";
import {store} from "@models";
import { Locale } from "@lib/Locale";
import {generalStore} from "@store";

interface State {
  awaiting: boolean;
}

@observer
class Authenticate extends React.Component<{}, State> {
  state: State = {
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
    authStore.guestLogin(name).then(async () => {
      await authStore.setGuestUser(name);
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
    authStore.discordLogin().then(async () => {
      await authStore.fetchDiscordUser();
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
