import { action, computed, observable } from "mobx";
import axios from 'axios';
import { APIRequest, Endpoints } from "../api";
import {API_URL, url} from "@lib/env";
import { ICategory } from "@ui/Sidebar/Channels/categorise";
import { useRouter } from "@hooks";
import CHANNELS from "@ui/Sidebar/Channels/Channels.graphql";
import { addNotification } from 'notify';
import {act} from "react-dom/test-utils";
import {Locale} from "@lib/Locale";
import {generalStore} from "@store/general";

interface DiscordUser {
  avatar: string
  banned: boolean
  bannedFrom: string[]
  discriminator: null
  ipAddresses: string[]
  provider: any
  username: string
  _id: string
}

interface GuestUser {
  username: string
}

type User = DiscordUser | GuestUser;

const loginError = (msg: string) => addNotification({
  level: 'warning',
  title: Locale.translate('frontend.notif.login.unsuccessful'),
  message: msg,
  autoDismiss: 0,
});
export class AuthStore {
  @observable token = window.localStorage.getItem('token');
  @observable locale = window.localStorage.getItem("locale") || "en";

  @observable inProgress: boolean = false;
  @observable errors: string | undefined = undefined;
  @observable user: User | null = JSON.parse(window.localStorage.getItem('user'));

  constructor() {
    if (!localStorage.getItem('token')) {
      this.logout();
      generalStore.needsUpdate = true;
      // localStorage.setItem('lastUpdate', version)
    }
  }

  @action setLocale(locale: string) {
    const keys = Locale.allKeys();
    if (!keys.includes(locale)) return; // Temp fix
    window.localStorage.setItem("locale", locale);
    this.locale = locale;
  }

  @action async fetchDiscordUser() {
    const { data } = await APIRequest(Endpoints.auth.fetchLatestProfile);

    window.localStorage.setItem('user', JSON.stringify(data));
    this.user = data;

    return data;
  }

  @action async setGuestUser(username: string) {
    window.localStorage.setItem('user', JSON.stringify({
      username
    }));

    this.user = {
      username
    };

    return {
      username
    }
  }

  @action logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');

    this.user = undefined;
    this.token = undefined;
  }

  @action discordLogin() {
    return new Promise<void>((resolve, reject) => {
      this.inProgress = true;
      this.errors = undefined;

      const x: number = screen.width / 2 - 840 / 2;
      const y: number = screen.height / 2 - 700 / 2;

      const newWindow = window.open(`${API_URL}${Endpoints.auth.discord.split(' ')[1]}`, 'Login to WidgetBot with Discord!', `menubar=no,width=840,height=700,location=no,resizable=no,scrollbars=yes,status=no,left=${x},top=${y}`);

      const timer = setInterval(() => {
        if ((newWindow as Window).closed) {
          cleanup();
          this.inProgress = false;
          reject(() => {});
        }
      }, 500);

      const receiveMessage = ({ data, source }: MessageEvent) => {
        source = source as Window;

        switch (data.type) {
          case 'AUTH_SUCCESS': {
            source.close();
            if (!data.token) {
              this.inProgress = false;
              return reject(() => {});
            }

            localStorage.setItem('token', data.token);

            this.token = data.token;
            this.inProgress = false;
            return resolve();
          }
          case 'AUTH_FAIL': {
            source.close();
            cleanup();
            console.log(data.error);
            return reject(() => {})
            // return reject(loginError("You pressed cancel on the authentication window"));
          }
        }
      };
      window.addEventListener('message', receiveMessage);

      const cleanup = () =>  {
        clearInterval(timer);
        window.removeEventListener('message', receiveMessage);
      }
    })
  }

  @action guestLogin(username: string) {
    return new Promise<void>(async (resolve, reject) => {
      this.inProgress = true;
      this.errors = undefined;

      const { data } = await APIRequest(Endpoints.auth.guest, {payload: {username}})

      switch (data.type) {
        case 'AUTH_SUCCESS': {
          if (!data.token) {
            this.inProgress = false;
            return reject(() => {});
          }

          localStorage.setItem('token', data.token);

          this.token = data.token;
          this.inProgress = false;
          return resolve();
        }
        case 'AUTH_FAIL': {
          console.log(data.error);
          return reject(() => {})
        }
      }
    })
  }
}

export const authStore = new AuthStore();
