import Block from './Block';

// eslint-disable-next-line import/prefer-default-export
export function renderDom(block: Block<any> | any) {
  const root = document.querySelector('#root');
  root!.innerHTML = '';
  root!.appendChild(block.getContent());
}
