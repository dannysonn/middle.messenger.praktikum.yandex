import template from './chats.hbs';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Chat from '../../components/chat/chat';
import { validateForm } from '../../utils/validateForm';
import Router from '../../utils/Router';
import Profile from '../Profile/profile';

const chats = [
  new Chat({
    userAvatar: '',
    userName: 'John',
    message: 'lorem ipsum.',
    time: '10:30',
    messagesCount: '5',
  }),
  new Chat({
    userAvatar: '',
    userName: 'Danila',
    message: 'Ya ochen',
    time: '10:30',
    messagesCount: '3',
  }),
  new Chat({
    userAvatar: '',
    userName: 'Irina',
    message: 'Ystaaaaal.',
    time: '10:30',
    messagesCount: '4',
  }),
];

interface ChatsProps {
  button: Button;
  profileBtn?: Button;
  chats: Chat[];
  events?: any;
}

export class Chats extends Block<ChatsProps> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: ChatsProps) {
    super(props);
  }

  protected initChildren() {
    this.children.button = new Button({
      text: '&#10148;',
      class: 'messages__send-btn',
      events: {
        click: () => {
          validateForm();
        },
      },
    });

    this.children.profileBtn = new Button({
      text: 'Profile link',
      class: 'chats-header__profile-link',
      events: {
        click: () => {
          const router = new Router();

          router.go('/profile');
        },
      },
    });

    this.children.chats = [];

    if (this.props?.chats) {
      Object.entries(this.props.chats).map(([key, chat]: [string, any]) => {
        this.children.chats.push(
          new Chat({
            userAvatar: this.props?.avatar ? this.props.avatar : 'https://via.placeholder.com/150',
            userName: 'chat.last_message.user.first_name',
            message: 'chat.last_message.content',
            time: '10:20',
            messagesCount: chat.unread_count,
          }),
        );
      });
    }
  }

  render(): DocumentFragment {
    console.log(this.props);
    return this.compile(template, { ...this.props });
  }
}
