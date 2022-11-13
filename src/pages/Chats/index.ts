import Chats from './chats';
import Chat from '../../components/chat/chat';
import Button from '../../components/button/button';
import { validateForm } from '../../utils/validateForm';
import Router from "../../utils/Router";

const router = new Router('root');

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


export const chatsPage = new Chats({
    button: new Button({
      text: '&#10148;',
      class: 'messages__send-btn',
      events: {
        click: () => {
          validateForm();
        },
      },
    }),
    profileBtn: new Button({
      text: 'Profile link',
      class: 'chats-header__profile-link',
      events: {
        click: () => {
          window.location.href = '/profile';
        }
      }
    }),
    chats: chats.map((chat: Chat) => chat),
  });
