import Block from '../../utils/Block';
import template from './error4.hbs';

interface ErrorProps {
  errorCode: string;
}

export default class Error404 extends Block {
  constructor(props: ErrorProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
