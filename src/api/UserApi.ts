import HTTPTransport from '../utils/HTTPTransport';

export interface UserData {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string
}

export interface UserPassword {
  oldPassword: string,
  newPassword: string
}

class UserApi {
  static chatAPIInstance = new HTTPTransport();

  public changeUserData(data: UserData) {
    return UserApi.chatAPIInstance.put('/user/profile', data);
  }

  public changeUserPassword(data: UserPassword) {
    return UserApi.chatAPIInstance.put('/user/password', data);
  }

  public changeUserAvatar(data: any) {
    return UserApi.chatAPIInstance.put('/user/profile/avatar', data, {});
  }
}

export default UserApi;
