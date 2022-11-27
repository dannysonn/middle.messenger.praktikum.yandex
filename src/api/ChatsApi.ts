import HTTPTransport from '../utils/HTTPTransport';

class ChatsApi {
  static chatAPIInstance = new HTTPTransport();

  public getChats() {
    return ChatsApi.chatAPIInstance.get('/chats');
  }

  public createChat(data: any) {
    return ChatsApi.chatAPIInstance.post('/chats', data);
  }

  public addUserToChat(data: any) {
    return ChatsApi.chatAPIInstance.put('/chats/users', data);
  }

  public deleteUserFromChat(data: any) {
    return ChatsApi.chatAPIInstance.delete('/chats/users', data);
  }

  public deleteChat(data: any) {
    return ChatsApi.chatAPIInstance.delete('/chats', data);
  }

  public connectToChat(chatId: any) {
    return ChatsApi.chatAPIInstance.post(`/chats/token/${chatId}`);
  }
}

export default ChatsApi;
