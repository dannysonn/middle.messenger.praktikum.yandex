import Block from '../../utils/Block';
import template from './profile.hbs';

interface ProfileProps {

}

export default class Profile extends Block {
  constructor(props: ProfileProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
