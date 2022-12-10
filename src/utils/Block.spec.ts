import { expect } from 'chai';
import * as Handlebars from 'handlebars';
import { JSDOM } from 'jsdom';
import Block from './Block';

const dom = new JSDOM(
  '<html><body><div id="app"></div></body></html>',
  {
    url: 'http://localhost',
  },
);

global.document = dom.window.document;

if (dom.window.document.defaultView) {
  global.DocumentFragment = dom.window.document.defaultView.DocumentFragment;
}
class Component extends Block<Record<string, any>> {
  constructor(props: any) {
    super(props);
  }

  protected render(): DocumentFragment {
    const tmpl = Handlebars.compile('<div>{{content}}</div>');
    return this.compile(tmpl, this.props);
  }
}
describe('Block should working', () => {
  const component = new Component({ content: 'tests' });

  it('get content from block', () => {
    expect(component.getContent(), 'tests');
  });
});
