import Block from '../../utils/Block';
import template from './chat.hbs';
import Button from '../button/button';

interface ChatProps {
  userAvatar: string;
  userName: string;
  message: string;
  time: string;
  messagesCount: string;
  deleteChatBtn: Button;
  id: string;
  events: any;
  addUserBtn: Button;
  deleteUserBtn: Button;
}

export default class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
