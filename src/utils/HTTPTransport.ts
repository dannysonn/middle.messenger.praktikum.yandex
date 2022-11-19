import { queryStringify } from './queryStringify';
import { router } from '../index';

enum Methods {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

export default class HTTPTransport {
  static baseUrl: string;

  constructor() {
    HTTPTransport.baseUrl = 'https://ya-praktikum.tech/api/v2';
  }

  get = (url: string) => this.request(`${HTTPTransport.baseUrl}${url}`, Methods.GET);

  put = (url: string, data?: any, headers?: Record<string, string>) => this.request(`${HTTPTransport.baseUrl}${url}`, Methods.PUT, data, headers);

  post = (url: string, data?: any, headers?: Record<string, string>) => this.request(`${HTTPTransport.baseUrl}${url}`, Methods.POST, data, headers);

  delete = (url: string, data?: any, headers?: Record<string, string>) => this.request(`${HTTPTransport.baseUrl}${url}`, Methods.DELETE, data, headers);

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
        alert(xhr.response.reason);

        if (xhr.response.reason === 'User already in system') {
          router.go('/chats');
        }
        reject(xhr.response);

        throw new Error(xhr.response);
      }
    };

    xhr.onabort = () => reject({ reason: 'abort' });
    xhr.onerror = () => reject({ reason: 'error' });
    xhr.ontimeout = () => reject({ reason: 'timeout' });

    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.withCredentials = true;
    xhr.responseType = 'json';

    if (method === Methods.GET || !data) {
      xhr.send();
    } else {
      xhr.send(JSON.stringify(data));
    }
  });
}
