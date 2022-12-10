import template from './button.hbs';
import Block from '../../utils/Block';

interface ButtonProps {
  text: string,
  class: string,
  formId?: string,
  events?: any,
  type?: any,
}

export default class Button extends Block<Record<string, any>> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
