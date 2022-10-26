import template from './chats.hbs';
import Block from '../../utils/Block';

interface ChatsProps {
  chats?: object[];
  events?;
}

export default class Chats extends Block {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: ChatsProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
