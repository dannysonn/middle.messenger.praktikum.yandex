import template from './chats.hbs';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Chat from '../../components/chat/chat';

interface ChatsProps {
  button: Button;
  chats: Chat[];
  events?: any;
}

export default class Chats extends Block<ChatsProps> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: ChatsProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
