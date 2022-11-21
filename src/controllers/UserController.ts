import UserApi from '../api/UserApi';
import {store} from "../utils/Store";

class UserController {
  api: any;

  constructor() {
    this.api = new UserApi();
  }

  async changeUserData(data: any) {
    await this.api.changeUserData(data).then((result) => {
      store.set('user', result);
    });
  }

  async changeUserPassword(data: any) {
    await this.api.changeUserPassword(data);
  }

  async changeUserAvatar(data: any) {
    await this.api.changeUserAvatar(data).then((result) => {
      store.set('user', result);
    });
  }
}

export default new UserController();
