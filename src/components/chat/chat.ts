import Block from '../../utils/Block';
import template from './chat.hbs';

interface ChatProps {
  userAvatar: string;
  userName: string;
  message: string;
  time: string;
  messagesCount: string;
}

export default class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
