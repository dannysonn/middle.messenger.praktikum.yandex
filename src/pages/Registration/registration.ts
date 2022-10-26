import Button from '../../components/button/button';
import Block from '../../utils/Block';
import template from './registration.hbs';
import Input from '../../components/input/input';

interface RegistrationProps {
  button: Button,
  emailInput: Input,
  loginInput: Input,
  nameInput: Input,
  surnameInput: Input,
  phoneInput: Input,
  passwordInput: Input,
  secondPasswordInput: Input,
}

export default class Registration extends Block {
  constructor(props: RegistrationProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
