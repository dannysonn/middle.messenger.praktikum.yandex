import HTTPTransport from '../utils/HTTPTransport';

class UserApi {
  static chatAPIInstance = new HTTPTransport();

  // public getUser() {
  //     return AuthApi.chatAPIInstance.get('/user');
  // }
  //
  // public signIn(data: any) {
  //     return AuthApi.chatAPIInstance.post('/signin', data);
  // }
  //
  // public signUp(data: any) {
  //     return AuthApi.chatAPIInstance.post('/signup', data);
  // }
  //
  // public logout() {
  //     return AuthApi.chatAPIInstance.post('/logout');
  // }

  public changeUserData(data: any) {
    return UserApi.chatAPIInstance.put('/user/profile', data);
  }

  public changeUserPassword(data: any) {
    return UserApi.chatAPIInstance.put('/user/password', data);
  }
}

export default UserApi;
