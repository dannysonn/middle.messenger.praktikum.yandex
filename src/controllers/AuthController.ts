import AuthApi from '../api/AuthApi';
import { router } from '../index';
import {store} from "../utils/Store";

class AuthController {
  api: any;

  constructor() {
    this.api = new AuthApi();
  }

  async getUser() {
    await this.api.getUser()
      .then((data: any) => store.set('user', data));
  }

  async signIn(data: any) {
    await this.api.signIn(data);

    router.go('/chats');
  }

  async signUp(data: any) {
    await this.api.signUp(data);

    router.go('/chats');
  }

  async logout() {
    await this.api.logout();
  }
}

export default new AuthController();
