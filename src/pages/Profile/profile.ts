import Block from '../../utils/Block';
import template from './profile.hbs';
import Button from '../../components/button/button';
import Form from '../../components/form/form';

interface ProfileProps {
  buttons: Button[],
  form: Form,
}

export default class Profile extends Block<ProfileProps> {
  constructor(props: ProfileProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
