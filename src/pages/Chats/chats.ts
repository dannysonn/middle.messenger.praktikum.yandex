import template from './chats.hbs';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Chat from '../../components/chat/chat';
import { validateForm } from '../../utils/validateForm';
import Router from '../../utils/Router';
import ChatsController from '../../controllers/ChatsController';
import { store, StoreEvents } from '../../utils/Store';
import { initInputsListEvents } from '../../utils/initInputsList';

interface ChatsProps {
  button: Button;
  profileBtn?: Button;
  chatList: Chat[];
  events?: any;
}

export class Chats extends Block {
  children: any;

  constructor(props: ChatsProps) {
    super(props);

    store.on(StoreEvents.Updated, () => {
      // вызываем обновление компонента, передав данные из хранилища
      this.setProps(store.getState());
    });
  }

  protected initChildren() {
    this.children.button = new Button({
      text: 'send',
      class: 'messages__send-btn',
      events: {
        click: (e) => {
          e.preventDefault();

          validateForm();

          const message = e.currentTarget.previousElementSibling.value;

          ChatsController.socket?.send(JSON.stringify({
            content: `${message}`,
            type: 'message',
          }));
        },
      },
    });

    this.children.profileBtn = new Button({
      text: 'Profile link',
      class: 'chats-header__profile-link',
      events: {
        click: () => {
          const router = new Router('#root');

          router.go('/profile');
        },
      },
    });

    this.children.newChatBtn = new Button({
      text: 'Create new chat',
      class: 'chats-header__btn',
      type: 'submit',
      events: {
        click: async (e: Event) => {
          e.preventDefault();

          // @ts-ignore
          let title = document.getElementById('new-chat')?.value;
          const data = {
            title,
          };

          await ChatsController.createChat(data);

          title = '';
        },
      },
    });

    this.children.chatList = [];
    if (this.props?.chats) {
      Object.entries(this.props.chats).map(([key, chat]: [string, any]) => {
        this.children.chatList.push(
          new Chat({
            userAvatar: chat.avatar ? chat.avatar : 'https://via.placeholder.com/150',
            userName: chat.title,
            message: 'no messages yet',
            time: '10:20',
            messagesCount: chat.unread_count,
            id: chat.id,
            events: {
              click: async () => {
                // @ts-ignore
                document.querySelector('.messages__footer')!.style = 'display: flex;';
                initInputsListEvents();

                const userId = store.getState().user.id;
                const chatId = chat.id;

                await ChatsController.connectToChat(userId, chatId);
              },
            },
            deleteChatBtn: new Button({
              text: 'Delete',
              class: 'chat__delete',
              events: {
                click: async () => {
                  const { id } = chat;

                  const data = {
                    chatId: id,
                  };

                  await ChatsController.deleteChat(data);
                },
              },
            }),
            addUserBtn: new Button({
              class: '',
              text: 'add user',
              type: 'submit',
              events: {
                click: async (e) => {
                  e.preventDefault();

                  const chatId = chat.id;
                  const userId = e.currentTarget.previousElementSibling.value;

                  await ChatsController.addUserToChat(userId, chatId);
                },
              },
            }),
            deleteUserBtn: new Button({
              class: '',
              text: 'delete user',
              type: 'submit',
              events: {
                click: async (e) => {
                  e.preventDefault();

                  const chatId = chat.id;
                  const userId = e.currentTarget.previousElementSibling.value;

                  await ChatsController.deleteUserFromChat(userId, chatId);
                },
              },
            }),
          }),
        );
      });
    }
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
