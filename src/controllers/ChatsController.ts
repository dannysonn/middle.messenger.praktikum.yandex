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
}

export default new ChatsController();
