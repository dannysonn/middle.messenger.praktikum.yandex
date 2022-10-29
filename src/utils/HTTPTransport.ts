enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data: any) {
  // Можно делать трансформацию GET-параметров в отдельной функции
  return `?${Object.keys(data).map((key) => `${key}=${data[key]}`).join('&')}`;
}

class HTTPTransport {
  get = (url: string, options = {}) => this.request(url, { ...options, method: METHODS.GET });

  put = (url: string, options = {}) => this.request(url, { ...options, method: METHODS.GET });

  post = (url: string, options = {}) => this.request(url, { ...options, method: METHODS.GET });

  delete = (url: string, options = {}) => this.request(url, { ...options, method: METHODS.GET });

  // PUT, POST, DELETE

  // options:
  // headers — obj
  // data — obj
  request = (url: string, options: any, timeout = 5000) => {
    const { method, data, headers } : { method: string, data: any, headers: Record<string, string> } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const newUrl = (method === METHODS.GET && data) ? `${url}${queryStringify(data)}` : url;

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

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
