import Block from '../../utils/Block';
import template from './userAvatar.hbs';

interface AvatarProps {
  class: string;
  userAvatar?: string;
  alt: string;
  events?: any;
}

export default class UserAvatar extends Block<AvatarProps> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: AvatarProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
