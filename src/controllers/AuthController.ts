import AuthApi from '../api/AuthApi';
import { router } from '../index';

class AuthController {
  api: any;

  constructor() {
    this.api = new AuthApi();
  }

  async getUser() {
    await this.api.getUser();
  }

  async signIn(data: any) {
    await this.api.signIn(data);

    window.location.href = '/chats';
  }

  async signUp(data: any) {
    await this.api.signUp(data);

    window.location.href = '/chats';
  }

  async logout() {
    await this.api.logout();
  }
}

export default new AuthController();
