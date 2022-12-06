import Block from '../../utils/Block';
import template from './userAvatarForm.hbs';
import UserAvatar from '../userAvatar/userAvatar';

export default class UserAvatarForm extends Block {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props);
  }

  protected initChildren() {
    this.children.avatar = new UserAvatar({
      class: 'profile__avatar',
      userAvatar: `https://ya-praktikum.tech/api/v2/resources${this.props?.avatar}`,
      alt: 'profile avatar',
    });
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
