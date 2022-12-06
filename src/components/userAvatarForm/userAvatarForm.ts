import Block from '../../utils/Block';
import template from './userAvatarForm.hbs';

interface UserAvatarFormProps {
  avatar: string;
  events: any;
}

export default class UserAvatarForm extends Block {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: UserAvatarFormProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { userAvatar: this.props?.avatar, ...this.props });
  }
}
