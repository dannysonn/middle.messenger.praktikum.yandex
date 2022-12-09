import { expect } from 'chai';
import { XMLHttpRequest } from 'xhr2';
import { SignInData } from './src/api/AuthApi';
import { queryStringify } from './src/utils/queryStringify';

enum Methods {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

class HTTPTransportTest {
  static baseUrl: string;

  constructor() {
    HTTPTransportTest.baseUrl = 'https://ya-praktikum.tech/api/v2';
  }

  get = (url: string) => this.request(`${HTTPTransportTest.baseUrl}${url}`, Methods.GET);

  put = (url: string, data?: any, headers?: Record<string, string>) => this.request(`${HTTPTransportTest.baseUrl}${url}`, Methods.PUT, data, headers);

  post = (url: string, data?: any, headers?: Record<string, string>) => this.request(`${HTTPTransportTest.baseUrl}${url}`, Methods.POST, data, headers);

  delete = (url: string, data?: any, headers?: Record<string, string>) => this.request(`${HTTPTransportTest.baseUrl}${url}`, Methods.DELETE, data, headers);

  request = (url: string, method: Methods, data?: any, headers?: Record<string, string>, timeout = 5000) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const newUrl = (method === Methods.GET && data) ? `${url}${queryStringify(data)}` : url;

    xhr.open(method, newUrl, true);

    if (headers) {
      Object.entries(headers).forEach(([key, value]) => xhr.setRequestHeader(key, value));
    }

    xhr.timeout = timeout;

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };

    xhr.onabort = () => reject({ reason: 'abort' });
    xhr.onerror = () => reject({ reason: 'error' });
    xhr.ontimeout = () => reject({ reason: 'timeout' });

    if (!headers) {
      xhr.setRequestHeader('Content-type', 'application/json');
    }

    xhr.withCredentials = true;
    xhr.responseType = 'json';

    if (method === Methods.GET || !data) {
      xhr.send();
    } else if (headers) {
      xhr.send(data);
    } else {
      xhr.send(JSON.stringify(data));
    }
  });
}

class TestApi {
  static testAPIInstance = new HTTPTransportTest();

  public signIn(data: any) {
    return TestApi.testAPIInstance.post('/auth/signin', data);
  }
}

class TestController {
  api: any;

  constructor() {
    this.api = new TestApi();
  }

  async signIn(data: SignInData) {
    await this.api.signIn(data);
  }
}

const test = new TestController();

describe('Check base url', () => {
  it('should check base url', async () => {
    const response = await test.signIn({
      login: 'pavukkk',
      password: '123456asd',
    });

    // @ts-ignore
    expect(response).eq(undefined);
  });
});
