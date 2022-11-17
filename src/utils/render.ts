import Block from './Block';

export function render(block: Block) {
  const root = document.querySelector('#root');
  root!.innerHTML = '';
  root!.appendChild(block.getContent());
}
