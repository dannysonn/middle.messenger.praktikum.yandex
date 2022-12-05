import HTTPTransport from '../utils/HTTPTransport';

export interface CreateChatData {
  title: string
}

export interface AddUserToChatData {
  users: number[],
  chatId: number
}

export interface DeleteUserFromChatData {
  users: number[],
  chatId: number
}

export interface DeleteChatData {
  chatId: number
}

class ChatsApi {
  static chatAPIInstance = new HTTPTransport();

  public getChats() {
    return ChatsApi.chatAPIInstance.get('/chats');
  }

  public createChat(data: CreateChatData) {
    return ChatsApi.chatAPIInstance.post('/chats', data);
  }

  public addUserToChat(data: AddUserToChatData) {
    return ChatsApi.chatAPIInstance.put('/chats/users', data);
  }

  public deleteUserFromChat(data: DeleteUserFromChatData) {
    return ChatsApi.chatAPIInstance.delete('/chats/users', data);
  }

  public deleteChat(data: DeleteChatData) {
    return ChatsApi.chatAPIInstance.delete('/chats', data);
  }

  public connectToChat(chatId: number) {
    return ChatsApi.chatAPIInstance.post(`/chats/token/${chatId}`);
  }
}

export default ChatsApi;
