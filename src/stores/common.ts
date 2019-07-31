import { observable, reaction, action } from "mobx";

export class CommonStore {
  @observable appName = 'DisWeb';
  @observable token = window.localStorage.getItem('token');
  @observable appLoaded = false;

  constructor() {
    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItem('token', token);
        } else {
          window.localStorage.removeItem('token');
        }
      }
    );
  }

  @action setToken(token) {
    this.token = token;
  }

  @action logout() {
    this.token = '';
  }
}

