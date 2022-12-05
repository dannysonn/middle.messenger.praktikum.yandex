import ChatsApi, {CreateChatData, DeleteChatData} from '../api/ChatsApi';
import { store } from '../utils/Store';

class ChatsController {
  api: any;

  socket: WebSocket | null;

  constructor() {
    this.api = new ChatsApi();
    this.socket = null;
  }

  async getChats() {
    await this.api.getChats()
      .then((data: any) => {
        store.set('chats', data);
      });
  }

  async createChat(data: CreateChatData) {
    await this.api.createChat(data)
      .then(() => {
        store.set('chats', this.getChats());
      });
  }

  async deleteChat(data: DeleteChatData) {
    await this.api.deleteChat(data)
      .then(() => {
        store.set('chats', this.getChats());
      });
  }

  async addUserToChat(userId: number, chatId: number) {
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

  async connectToChat(userId: number, chatId: number) {
    await this.api.connectToChat(chatId)
      .then((data: any) => {
        const chatContent = document.querySelector('.messages__content');
        chatContent.innerHTML = '';

        if (this.socket) {
          this.socket.close();
        }

        const { token } = data;

        this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);

        this.socket.addEventListener('open', () => {
          console.log('Соединение установлено');

          this.socket?.send(JSON.stringify({
            content: '0',
            type: 'get old',
          }));

          setInterval(() => {
            this.socket?.send(JSON.stringify({
              type: 'ping',
            }));
          }, 3000);
        });

        this.socket.addEventListener('close', (event) => {
          if (event.wasClean) {
            console.log('Соединение закрыто чисто');
          } else {
            console.log('Обрыв соединения');
          }

          console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        });

        this.socket.addEventListener('message', (event) => {
          const data = JSON.parse(event.data);
          console.log('Получены данные', data);

          if (data.type === 'pong') {

          } else if (Array.isArray(data)) {
            data.forEach((item) => {
              const messageElem = document.createElement('div');

              if (item.user_id === store.getState().user.id) {
                messageElem.innerHTML = `
                    <div class="messages__mine-container">
                        <div class="messages__mine">
                            ${item.content}
                        </div>
                    </div>
                `;
              } else {
                messageElem.innerHTML = `
                <div class="messages__friend-container">
                        <div class="messages__friend">
                            ${item.content}
                        </div>
                    </div>`;
              }

              document.querySelector('.messages__content')
                ?.prepend(messageElem);
            });
          } else {
            const messageElem = document.createElement('div');

            if (data.user_id === store.getState().user.id) {
              messageElem.innerHTML = `
                    <div class="messages__mine-container">
                        <div class="messages__mine">
                            ${data.content}
                        </div>
                    </div>
                `;
            } else {
              messageElem.innerHTML = `
                <div class="messages__friend-container">
                        <div class="messages__friend">
                            ${data.content}
                        </div>
                    </div>`;
            }

            document.querySelector('.messages__content')
              ?.append(messageElem);
          }
        });

        this.socket.addEventListener('error', (event) => {
          console.log('Ошибка', event.message);
        });
      });
  }
}

export default new ChatsController();
