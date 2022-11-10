import Chats from './chats';
import { renderDom } from '../../utils/renderDom';
import Chat from '../../components/chat/chat';
import Button from '../../components/button/button';
import { validateForm } from '../../utils/validateForm';
import { initInputsListEvents } from '../../utils/initInputsList';

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

document.addEventListener('DOMContentLoaded', () => {
  const chatsPage = new Chats({
    button: new Button({
      text: '&#10148;',
      class: 'messages__send-btn',
      events: {
        click: () => {
          validateForm();
        },
      },
    }),
    chats: chats.map((chat: Chat) => chat),
  });

  renderDom(chatsPage);

  initInputsListEvents();
});
