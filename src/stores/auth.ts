import { action, computed, observable } from "mobx";
import axios from 'axios';
import { APIRequest, Endpoints } from "../api";
import { url } from "@lib/env";
import { ICategory } from "@ui/Sidebar/Channels/categorise";
import { useRouter } from "@hooks";
import CHANNELS from "@ui/Sidebar/Channels/Channels.graphql";
import { addNotification } from '../app/notify';

interface User {
  createdAt: string,
  discriminator: string,
  email: null,
  locale: string,
  mfa_enabled: boolean,
  slug: string,
  snowflake: string,
  updatedAt: string,
  username: string
}

export class AuthStore {
  @observable appName = 'DisWeb';
  @observable channels: ICategory[] = [];
  @observable token = window.localStorage.getItem('token');

  @observable inProgress: boolean = false;
  @observable errors: string | undefined = undefined;
  @observable user: User = JSON.parse(window.localStorage.getItem('user'));

  @action refreshChannels() {
    const { guild } = useRouter();

  }

  @action async fetchUser() {
    const { data } = await APIRequest(Endpoints.auth.fetchLatestProfile());

    window.localStorage.setItem('user', JSON.stringify(data));
    this.user = data;

    return data;
  }

  @action logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');

    this.user = undefined;
    this.token = undefined;
  }

  @action login() {
    const exitWarning = () => addNotification({
      level: 'warning',
      title: 'Login Unsuccessful',
      message: 'You exited the window.',
      autoDismiss: 0,
    });
    return new Promise((resolve, reject) => {
      this.inProgress = true;
      this.errors = undefined;

      const x: number = screen.width / 2 - 500 / 2;
      const y: number = screen.height / 2 - 720 / 2;

      const newWindow = window.open(`${url.includes('127.0.0.1') ? `http://${url}` : `https://${url}`}/auth/discord`, 'Login to DisWeb with Discord!', `menubar=no,width=500,height=720,location=no,resizable=no,scrollbars=yes,status=no,left=${x},top=${y}`);

      const timer = setInterval(() => {
        if ((newWindow as Window).closed) {
          cleanup();
          this.inProgress = false;
          reject(exitWarning());
        }
      }, 1000);

      const receiveMessage = ({ data, source }: MessageEvent) => {
        source = source as Window;

        switch (data.type) {
          case 'AUTH': {
            source.close();
            if (!data.token) {
              this.inProgress = false;
              return reject('No token passed in request.');
            }

            localStorage.setItem('token', data.token);

            this.token = data.token;
            this.inProgress = false;
            resolve();
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
}

export default new AuthStore();