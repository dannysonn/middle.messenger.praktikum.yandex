import HTTPTransport from '../utils/HTTPTransport';

export interface SignInData {
  login: string,
  password: string
}

export interface SignUpData {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string
}

class AuthApi {
  static chatAPIInstance = new HTTPTransport();

  public getUser() {
    return AuthApi.chatAPIInstance.get('/auth/user');
  }

  public signIn(data: SignInData) {
    return AuthApi.chatAPIInstance.post('/auth/signin', data);
  }

  public signUp(data: SignUpData) {
    return AuthApi.chatAPIInstance.post('/auth/signup', data);
  }

  public logout() {
    return AuthApi.chatAPIInstance.post('/auth/logout');
  }
}

export default AuthApi;
