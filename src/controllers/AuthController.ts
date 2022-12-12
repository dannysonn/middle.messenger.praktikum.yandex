import AuthApi, { SignInData, SignUpData } from '../api/AuthApi';
import { router } from '../index';
import { store } from '../utils/Store';

class AuthController {
  api: any;

  constructor() {
    this.api = new AuthApi();
  }

  async getUser() {
    await this.api.getUser()
      .then((data: any) => {
        store.set('user', data);

        const isAuthPage = document.querySelector('.authorization');

        if (isAuthPage) {
          router.go('/chats');
        }
      });
  }

  async signIn(data: SignInData) {
    await this.api.signIn(data);
  }

  async signUp(data: SignUpData) {
    await this.api.signUp(data);

    router.go('/chats');
  }

  async logout() {
    await this.api.logout();
  }
}

export default new AuthController();
