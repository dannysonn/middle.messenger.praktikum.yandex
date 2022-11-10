import Block from '../../utils/Block';
import template from './error5.hbs';

interface ErrorProps {
  errorCode: string;
}

export default class Error5 extends Block<ErrorProps> {
  constructor(props: ErrorProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
