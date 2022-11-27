import HTTPTransport from '../utils/HTTPTransport';

class AuthApi {
  static chatAPIInstance = new HTTPTransport();

  public getUser() {
    return AuthApi.chatAPIInstance.get('/auth/user');
  }

  public signIn(data: any) {
    return AuthApi.chatAPIInstance.post('/auth/signin', data);
  }

  public signUp(data: any) {
    return AuthApi.chatAPIInstance.post('/auth/signup', data);
  }

  public logout() {
    return AuthApi.chatAPIInstance.post('/auth/logout');
  }
}

export default AuthApi;
