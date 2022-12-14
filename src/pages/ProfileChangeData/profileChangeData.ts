import Block from '../../utils/Block';
import template from '../Profile/profile.hbs';
import Button from '../../components/button/button';
import Form from '../../components/form/form';
import Input from '../../components/input/input';
// eslint-disable-next-line import/no-cycle
import UserController from '../../controllers/UserController';
import { validateForm } from '../../utils/validateForm';
// eslint-disable-next-line import/no-cycle
import { router } from '../../index';

interface ProfileProps {
  buttons: Button[],
  form: Form,
  profileBtn: Button,
}

// eslint-disable-next-line import/prefer-default-export
export class ProfileChangeData extends Block<Record<string, any>> {
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
          id: 'authForm__email',
          label: 'Email',
          type: 'email',
          value: this.props?.email,
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
          value: this.props?.login,
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
          value: this.props?.first_name,
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
          value: this.props?.second_name,
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
          value: this.props?.phone,
          name: 'phone',
          hasLineBreak: false,
        }),
      ],

      events: {
        submit: async (event: Event) => {
          event.preventDefault();

          validateForm();

          const inputs = document.querySelectorAll('input');

          const userData = {
            display_name: 'null',
          };

          inputs.forEach((input: any) => {
            userData[input.name] = input.value;
          });

          try {
            // @ts-ignore
            await UserController.changeUserData(userData).then(() => {
              alert('Data changed');
            });
          } catch (e) {
            console.error(e);
          }
        },
      },
    });

    // @ts-ignore
    this.children.buttons = [
      new Button({
        class: 'profile__footer-item',
        text: 'Save data',
        formId: 'profileForm',
        type: 'submit',
        events: {
          click: () => {

          },
        },
      }),
    ];

    this.children.profileBtn = new Button({
      text: '',
      class: 'profile__btn',
      events: {
        click: () => {
          router.go('/chats');
        },
      },
    });
  }

  render(): DocumentFragment {
    return this.compile(template, { name: this.props?.first_name, ...this.props });
  }
}
