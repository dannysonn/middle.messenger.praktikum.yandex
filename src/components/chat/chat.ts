import Block from '../../utils/Block';
import template from './chat.hbs';
import Button from '../button/button';

interface ChatProps {
  userAvatar: string;
  userName: string;
  message: string;
  time: string;
  events: any;
  messagesCount: string;
  addUserBtn: Button;
  deleteUserBtn: Button;
  deleteChatBtn: Button;
  id: string;
}

export default class Chat extends Block<Record<string, any>> {
  constructor(props: ChatProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
