import HTTPTransport from '../utils/HTTPTransport';

class UserApi {
  static chatAPIInstance = new HTTPTransport();

  public changeUserData(data: any) {
    return UserApi.chatAPIInstance.put('/user/profile', data);
  }

  public changeUserPassword(data: any) {
    return UserApi.chatAPIInstance.put('/user/password', data);
  }

  public changeUserAvatar(data: any) {
    return UserApi.chatAPIInstance.put('/user/profile/avatar', data);
  }
}

export default UserApi;
