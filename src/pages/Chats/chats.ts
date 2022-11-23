import template from './chats.hbs';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Chat from '../../components/chat/chat';
import { validateForm } from '../../utils/validateForm';
import Router from '../../utils/Router';
import ChatsController from '../../controllers/ChatsController';
import { store, StoreEvents } from '../../utils/Store';

interface ChatsProps {
  button: Button;
  profileBtn?: Button;
  chatList: Chat[];
  events?: any;
}

export class Chats extends Block<ChatsProps> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: ChatsProps) {
    super(props);

    store.on(StoreEvents.Updated, () => {
      // вызываем обновление компонента, передав данные из хранилища
      this.setProps(store.getState());
    });
  }

  protected initChildren() {
    this.children.button = new Button({
      text: '&#10148;',
      class: 'messages__send-btn',
      events: {
        click: () => {
          validateForm();
        },
      },
    });

    this.children.profileBtn = new Button({
      text: 'Profile link',
      class: 'chats-header__profile-link',
      events: {
        click: () => {
          const router = new Router();

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

          let title = document.getElementById('new-chat')?.value;
          const data = {
            title,
          };

          await ChatsController.createChat(data);

          title = '';
        },
      },
    });

    this.children.chats = [];

    if (this.props?.chats) {
      Object.entries(this.props.chats).map(([key, chat]: [string, any]) => {
        this.children.chats.push(
          new Chat({
            userAvatar: chat.avatar ? chat.avatar : 'https://via.placeholder.com/150',
            userName: chat.title,
            message: chat.last_message ? chat.last_message : 'no messages yet',
            time: '10:20',
            messagesCount: chat.unread_count,
            id: chat.id,
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
          }),
        );
      });
    }
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
