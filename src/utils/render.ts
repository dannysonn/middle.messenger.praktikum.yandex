import Block from './Block';

export function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (!root) {
    throw new Error('Root element not found');
  }

  root.innerHTML = '';
  // block.element.removeAttribute('style');
  let blockk = block.getContent();
  console.log(blockk)
  root.appendChild(block.getContent());
  block.show();

  return root;
}
