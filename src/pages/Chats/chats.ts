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

    this.children.chats = chats.map((chat: Chat) => chat);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
