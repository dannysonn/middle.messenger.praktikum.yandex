import Block from '../../utils/Block';
import template from './login.hbs';

interface LoginProps {

}

export default class Login extends Block<LoginProps> {
  constructor(props: LoginProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
