import Block from '../../utils/Block';
import template from './userAvatar.hbs';
import { store, StoreEvents } from '../../utils/Store';

interface AvatarProps {
  class: string;
  userAvatar?: string;
  alt: string;
  events?: any;
}

export default class UserAvatar extends Block {
  constructor(props: AvatarProps) {
    super(props);

    store.on(StoreEvents.Updated, () => {
      this.setProps(this.props);
    });
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
