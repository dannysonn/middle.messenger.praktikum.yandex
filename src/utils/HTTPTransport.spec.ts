import { expect } from 'chai';
import HTTPTransport from './HTTPTransport';

global.XMLHttpRequest = require('xhr2');

const http = new HTTPTransport();

describe('HTTPTransport base url should be correct', () => {
  it('should be a correct base url', () => {
    expect(HTTPTransport.baseUrl).eq('https://ya-praktikum.tech/api/v2');
  });

  it('sign in should return null', async () => {
    const response = await http.post('/auth/signin', {
      login: 'pavukkk',
      password: '123456asd',
    });

    expect(response).eq(null);
  });
});
