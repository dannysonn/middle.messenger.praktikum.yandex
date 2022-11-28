import Block from '../../utils/Block';
import template from '../Profile/profile.hbs';
import Button from '../../components/button/button';
import Form from '../../components/form/form';
import Input from '../../components/input/input';
import Router from '../../utils/Router';
import { validateForm } from '../../utils/validateForm';
import UserController from '../../controllers/UserController';

interface ProfileProps {
  buttons: Button[],
  form: Form,
  profileBtn: Button,
}

interface PasswordData {
  oldPassword: string,
  newPassword: string,
}

export class ProfileChangePassword extends Block<ProfileProps> {
  constructor(props: ProfileProps) {
    super(props);
  }

  protected initChildren() {
    this.children.form = new Form({
      formId: 'profileForm',
      inputs: [
        new Input({
          wrapperClass: 'profile__item',
          labelClass: 'content__item-label',
          inputClass: 'content__item-data',
          id: 'authForm__password',
          label: 'Current password',
          type: 'password',
          placeholder: '**********',
          name: 'password',
          hasLineBreak: false,
        }),
        new Input({
          wrapperClass: 'profile__item',
          labelClass: 'content__item-label',
          inputClass: 'content__item-data',
          id: 'authForm__password-second',
          label: 'New password',
          type: 'password',
          placeholder: '**********',
          name: 'second_password',
          hasLineBreak: false,
        }),
      ],

      events: {
        submit: async (event: Event) => {
          event.preventDefault();

          validateForm();

          const inputs = document.querySelectorAll('input');

          const oldPassword = inputs[0].value;
          const newPassword = inputs[1].value;

          const passwordData: PasswordData = {
            oldPassword,
            newPassword,
          };

          if (oldPassword !== localStorage.getItem('currentPassword')) {
            alert('Wrong current password');
          } else {
            await UserController.changeUserPassword(passwordData);
            localStorage.setItem('currentPassword', `${newPassword}`);
          }
        },
      },
    });

    this.children.buttons = [
      new Button({
        class: 'profile__footer-item',
        text: 'Save password',
        formId: 'profileForm',
        type: 'submit',
        events: {
          click: () => {
            // const router = new Router();
            // router.go('/profile');
          },
        },
      }),
    ];

    this.children.profileBtn = new Button({
      text: '',
      class: 'profile__btn',
      events: {
        click: () => {
          const router = new Router();
          router.go('/chats');
        },
      },
    });
  }

  render(): DocumentFragment {
    return this.compile(template, { name: this.props?.first_name, ...this.props });
  }
}
