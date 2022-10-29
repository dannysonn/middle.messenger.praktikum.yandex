import Block from '../../utils/Block';
import template from './input.hbs';

interface InputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  name: string;
}

export default class Input extends Block {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: InputProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
