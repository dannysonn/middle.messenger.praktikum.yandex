import { expect } from 'chai';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><div id="root"></div>', {
  url: 'http://localhost:1234',
});

global.window = dom.window.document.defaultView;

describe('History api', () => {
  it('Should change history', () => {
    window.history.pushState({ page: 'chat' }, 'Chat', '/chat');
    const { pathname } = window.location;

    expect(pathname).to.eq('/chat');
  });
});
