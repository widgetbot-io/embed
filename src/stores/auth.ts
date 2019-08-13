import { action, computed, observable } from "mobx";
import axios from 'axios';
import { APIRequest, Endpoints } from "../api";

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
  @observable token = window.localStorage.getItem('token');

  @observable inProgress: boolean = false;
  @observable errors: string | undefined = undefined;
  @observable user: User = undefined;

  @action async fetchUser() {
    const { data } = await APIRequest(Endpoints.auth.fetchLatestProfile());

    this.user = data;

    return data;
  }

  @action login() {
    return new Promise((resolve, reject) => {
      this.inProgress = true;
      this.errors = undefined;

      const x: number = screen.width / 2 - 500 / 2;
      const y: number = screen.height / 2 - 720 / 2;

      const newWindow = window.open(`http://127.0.0.1:8443/auth/discord`, 'Login to DisWeb with Discord!', `menubar=no,width=500,height=720,location=no,resizable=no,scrollbars=yes,status=no,left=${x},top=${y}`);

      const timer = setInterval(() => {
        if ((newWindow as Window).closed) {
          cleanup();
          this.inProgress = false;
          reject(new Error('Login Cancelled.'));
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
    /* this.inProgress = true;
    this.errors = undefined;
    return agent.Auth.login(this.values.email, this.values.password)
      .then(({ user }) => commonStore.setToken(user.token))
      .then(() => userStore.pullUser())
      .catch(action((err) => {
        this.errors = err.response && err.response.body && err.response.body.errors;
        throw err;
      }))
      .finally(action(() => { this.inProgress = false; }));
  } */
  }
}

export default new AuthStore();
