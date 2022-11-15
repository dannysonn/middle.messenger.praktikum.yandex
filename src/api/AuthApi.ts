import HTTPTransport from '../utils/HTTPTransport';

class AuthApi {
  static chatAPIInstance = new HTTPTransport('/auth');

  public getUser() {
    return AuthApi.chatAPIInstance.get('/user');
  }

  public signIn(data: any) {
    return AuthApi.chatAPIInstance.post('/signin', data);
  }

  public signUp(data: any) {
    return AuthApi.chatAPIInstance.post('/signup', data);
  }

  public logout() {
    return AuthApi.chatAPIInstance.post('/logout');
  }
}

export default AuthApi;
