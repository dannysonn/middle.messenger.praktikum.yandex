import template from './chats.hbs';
import Block from '../../utils/Block';
import Chat from '../../components/chat/chat';

interface ChatsProps {
  chats: any;
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
