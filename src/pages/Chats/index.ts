import Chats from './chats';
import { renderDom } from '../../utils/renderDom';
import Chat from '../../components/chat/chat';

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
    userName: 'John',
    message: 'lorem ipsum.',
    time: '10:30',
    messagesCount: '5',
  }),
  new Chat({
    userAvatar: '',
    userName: 'John',
    message: 'lorem ipsum.',
    time: '10:30',
    messagesCount: '5',
  }),
];

document.addEventListener('DOMContentLoaded', () => {
  const chatsPage = new Chats({});

  renderDom(chatsPage);

  const chatList: Element | null = document.querySelector('.chats-list');

  chats.forEach((chat) => {
    if (chatList !== null) {
      chatList.append(chat.getContent());
    }
  });
});
