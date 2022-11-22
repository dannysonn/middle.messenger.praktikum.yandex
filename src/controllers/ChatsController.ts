import ChatsApi from '../api/ChatsApi';
import { store } from '../utils/Store';

class ChatsController {
  api: any;

  constructor() {
    this.api = new ChatsApi();
  }

  async getChats() {
    await this.api.getChats().then((data: any) => {
      // const date = [];
      //
      // for (let i = 0; i < 15; i++) {
      //   date.push({
      //     id: 123,
      //     title: 'my-chat',
      //     avatar: '/123/avatar1.jpg',
      //     unread_count: 15,
      //     last_message: {
      //       user: {
      //         first_name: 'Petya',
      //         second_name: 'Pupkin',
      //         avatar: '/path/to/avatar.jpg',
      //         email: 'my@email.com',
      //         login: 'userLogin',
      //         phone: '8(911)-222-33-22',
      //       },
      //       time: '2020-01-02T14:22:22.000Z',
      //       content: 'this is message content',
      //     },
      //   });
      // }
      debugger

      store.set('chats', data);
    });
  }
}

export default new ChatsController();
