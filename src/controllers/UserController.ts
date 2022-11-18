import UserApi from '../api/UserApi';

class UserController {
  api: any;

  constructor() {
    this.api = new UserApi();
  }

  async changeUserData(data: any) {
    await this.api.changeUserData(data);
  }

  async changeUserPassword(data: any) {
    await this.api.changeUserPassword(data);
  }
}

export default new UserController();
