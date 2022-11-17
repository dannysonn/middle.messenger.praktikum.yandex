import Block from '../../utils/Block';
import template from './profile.hbs';
import Button from '../../components/button/button';
import Form from '../../components/form/form';
import { renderDom } from '../../utils/renderDom';
import { initInputsListEvents } from '../../utils/initInputsList';
import AuthController from '../../controllers/AuthController';
import Input from '../../components/input/input';
import Router from '../../utils/Router';
import {store, StoreEvents} from "../../utils/Store";

interface ProfileProps {
  buttons: Button[],
  form: Form,
  profileBtn: Button,
}

const profileButtons = [
  new Button({
    class: 'profile__footer-item',
    text: 'Change data',
    events: {
      click: () => {
        renderDom('root', profileChangeData);
        initInputsListEvents();
      },
    },
  }),
  new Button({
    class: 'profile__footer-item',
    text: 'Change password',
    events: {
      click: () => {
        renderDom('root', profileChangePassword);
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

        const router = new Router();
        router.go('/');
      },
    },
  }),
];

// const changeDataButtons = [
//   new Button({
//     class: 'profile__footer-item',
//     text: 'Save data',
//     formId: 'profileForm',
//   }),
// ];
//
// const changePasswordButtons = [
//   new Button({
//     class: 'profile__footer-item',
//     text: 'Save password',
//     formId: 'profileForm',
//   }),
// ];

const profileInputs = [
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__email',
    label: 'Email',
    type: 'email',
    placeholder: 'programmer2000@google.com',
    name: 'email',
    hasLineBreak: false,
    readonly: true,
  }),
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__login',
    label: 'Login',
    type: 'login',
    placeholder: 'programmer2000',
    name: 'login',
    hasLineBreak: false,
    readonly: true,
  }),
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__name',
    label: 'Name',
    type: 'name',
    placeholder: 'Elon',
    name: 'first_name',
    hasLineBreak: false,
    readonly: true,
  }),
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__surname',
    label: 'Surname',
    type: 'surname',
    placeholder: 'Musk',
    name: 'second_name',
    hasLineBreak: false,
    readonly: true,
  }),
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__phone',
    label: 'Phone',
    type: 'phone',
    placeholder: '999-99-999',
    name: 'phone',
    hasLineBreak: false,
    readonly: true,
  }),
];

const profileInputsChangeData = [
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__email',
    label: 'Email',
    type: 'email',
    placeholder: 'programmer2000@google.com',
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
    placeholder: 'programmer2000',
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
    placeholder: 'Elon',
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
    placeholder: 'Musk',
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
    placeholder: '999-99-999',
    name: 'phone',
    hasLineBreak: false,
  }),
];

export class Profile extends Block<ProfileProps> {
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

    this.children.buttons = profileButtons.map((button: Button) => button);

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
