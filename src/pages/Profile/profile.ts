import Block from '../../utils/Block';
import template from './profile.hbs';
import Button from '../../components/button/button';
import Form from '../../components/form/form';
import { initInputsListEvents } from '../../utils/initInputsList';
import AuthController from '../../controllers/AuthController';
import Input from '../../components/input/input';
import Router from '../../utils/Router';
import UserController from '../../controllers/UserController';
import UserAvatarForm from '../../components/userAvatarForm/userAvatarForm';
import { store, StoreEvents } from '../../utils/Store';
import ChatsController from '../../controllers/ChatsController';

interface ProfileProps {
  buttons: Button[],
  form: Form,
  profileBtn: Button,
}

export class Profile extends Block {
  constructor(props: ProfileProps) {
    super(props);

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  protected initChildren() {
    this.children.form = new Form({
      formId: 'profileForm',
      inputs: [
        new Input({
          wrapperClass: 'profile__item',
          labelClass: 'content__item-label',
          inputClass: 'content__item-data',
          id: 'authForm__email',
          label: 'Email',
          type: 'email',
          placeholder: this.props?.email,
          name: 'email',
          hasLineBreak: false,
        }),
        new Input({
          wrapperClass: 'profile__item',
          labelClass: 'content__item-label',
          inputClass: 'content__item-data',
          id: 'authForm__login',
          label: 'Login',
          type: 'login',
          placeholder: this.props?.login,
          name: 'login',
          hasLineBreak: false,
        }),
        new Input({
          wrapperClass: 'profile__item',
          labelClass: 'content__item-label',
          inputClass: 'content__item-data',
          id: 'authForm__name',
          label: 'Name',
          type: 'name',
          placeholder: this.props?.first_name,
          name: 'first_name',
          hasLineBreak: false,
        }),
        new Input({
          wrapperClass: 'profile__item',
          labelClass: 'content__item-label',
          inputClass: 'content__item-data',
          id: 'authForm__surname',
          label: 'Surname',
          type: 'surname',
          placeholder: this.props?.second_name,
          name: 'second_name',
          hasLineBreak: false,
        }),
        new Input({
          wrapperClass: 'profile__item',
          labelClass: 'content__item-label',
          inputClass: 'content__item-data',
          id: 'authForm__phone',
          label: 'Phone',
          type: 'phone',
          placeholder: this.props?.phone,
          name: 'phone',
          hasLineBreak: false,
        }),
      ],
    });

    // @ts-ignore
    this.children.buttons = [
      new Button({
        class: 'profile__footer-item',
        text: 'Change data',
        events: {
          click: () => {
            const router = new Router('#root');
            router.go('/profileChangeData');

            initInputsListEvents();
          },
        },
      }),
      new Button({
        class: 'profile__footer-item',
        text: 'Change password',
        events: {
          click: () => {
            const router = new Router('#root');
            router.go('/profileChangePassword');

            initInputsListEvents();
          },
        },
      }),
      new Button({
        class: 'profile__footer-item profile__footer-item--logout',
        text: 'Logout',
        events: {
          click: () => {
            AuthController.logout();

            const router = new Router('#root');
            router.go('/');
          },
        },
      }),
    ];

    this.children.profileBtn = new Button({
      text: '',
      class: 'profile__btn',
      events: {
        click: async () => {
          const router = new Router('#root');
          router.go('/chats');
          await ChatsController.getChats();
        },
      },
    });

    this.children.userAvatar = new UserAvatarForm({
      avatar: this.props?.avatar,
      events: {
        submit: async (e) => {
          e.preventDefault();

          const inputFile = document.getElementById('avatar');

          const formData = new FormData();

          // @ts-ignore
          formData.append('avatar', inputFile?.files[0]);

          await UserController.changeUserAvatar(formData);
        },
      },
    });
  }

  render(): DocumentFragment {
    return this.compile(template, { name: this.props?.first_name, ...this.props });
  }
}
