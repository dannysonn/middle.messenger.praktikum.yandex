import { queryStringify } from './queryStringify';

enum Methods {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

type Options = { method: string, data: any, headers: Record<string, string> };

class HTTPTransport {
  get = (url: string, options: Options) => this.request(url, { ...options, method: Methods.GET });

  put = (url: string, options: Options) => this.request(url, { ...options, method: Methods.PUT });

  post = (url: string, options: Options) => this.request(url, { ...options, method: Methods.POST });

  delete = (url: string, options: Options) => this.request(url, { ...options, method: Methods.DELETE });

  request = (url: string, options: Options, timeout = 5000) => {
    const { method, data, headers } : Options = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const newUrl = (method === Methods.GET && data) ? `${url}${queryStringify(data)}` : url;

      xhr.open(method, newUrl, true);

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => xhr.setRequestHeader(key, value));
      }

      xhr.timeout = timeout;

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === Methods.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
