import Button from '../../components/button/button';
import Block from '../../utils/Block';
import template from './registration.hbs';
import Form from '../../components/form/form';

interface RegistrationProps {
  button: Button,
  form: Form,
  signInBtn: Button
}

export default class Registration extends Block<RegistrationProps> {
  constructor(props: RegistrationProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
