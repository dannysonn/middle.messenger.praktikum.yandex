import ChatsApi from '../api/ChatsApi';
import { store, StoreEvents } from '../utils/Store';

class ChatsController {
  api: any;

  constructor() {
    this.api = new ChatsApi();
  }

  async getChats() {
    await this.api.getChats().then((data: any) => {
      store.set('chats', data);
    });
  }

  async createChat(data: any) {
    await this.api.createChat(data).then(() => {
      store.set('chats', this.getChats());
    });
  }

  async deleteChat(data: any) {
    await this.api.deleteChat(data).then(() => {
      store.set('chats', this.getChats());
    });
  }

  async addUserToChat(userId: any, chatId: string) {
    const data = {
      users: [userId],
      chatId,
    };
    await this.api.addUserToChat(data);
  }

  async deleteUserFromChat(userId: string, chatId: string) {
    const data = {
      users: [userId],
      chatId,
    };

    await this.api.deleteUserFromChat(data);
  }

  async connectToChat(userId: any, chatId: any) {
    await this.api.connectToChat(chatId)
      .then((data: any) => {
        const { token } = data;

        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);

        socket.addEventListener('open', () => {
          console.log('Соединение установлено');

          socket.send(JSON.stringify({
            content: 'Hello world!',
            type: 'message',
          }));
        });

        socket.addEventListener('close', (event) => {
          if (event.wasClean) {
            console.log('Соединение закрыто чисто');
          } else {
            console.log('Обрыв соединения');
          }

          console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        });

        socket.addEventListener('message', (event) => {
          console.log('Получены данные', event.data);
          document.querySelector('.messages__content')?.append(`<span>${event.data.content}</span>`);
        });

        socket.addEventListener('error', (event) => {
          console.log('Ошибка', event.message);
        });
      });
  }
}

export default new ChatsController();
