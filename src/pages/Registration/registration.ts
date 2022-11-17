import Button from '../../components/button/button';
import Block from '../../utils/Block';
import template from './registration.hbs';
import Form from '../../components/form/form';
import Input from '../../components/input/input';
import { validateForm } from '../../utils/validateForm';
import AuthController from '../../controllers/AuthController';
import {router} from "../../index";

const inputs = [
  new Input({
    wrapperClass: 'authForm__item',
    id: 'authForm__email',
    label: 'Email',
    type: 'email',
    placeholder: 'programmer2000@google.com',
    name: 'email',
    hasLineBreak: true,
  }),
  new Input({
    wrapperClass: 'authForm__item',
    id: 'authForm__login',
    label: 'Login',
    type: 'login',
    placeholder: 'programmer2000',
    name: 'login',
    hasLineBreak: true,
  }),
  new Input({
    wrapperClass: 'authForm__item',
    id: 'authForm__name',
    label: 'Name',
    type: 'name',
    placeholder: 'Elon',
    name: 'first_name',
    hasLineBreak: true,
  }),
  new Input({
    wrapperClass: 'authForm__item',
    id: 'authForm__surname',
    label: 'Surname',
    type: 'surname',
    placeholder: 'Musk',
    name: 'second_name',
    hasLineBreak: true,
  }),
  new Input({
    wrapperClass: 'authForm__item',
    id: 'authForm__phone',
    label: 'Phone',
    type: 'phone',
    placeholder: '999-99-999',
    name: 'phone',
    hasLineBreak: true,
  }),
  new Input({
    wrapperClass: 'authForm__item',
    id: 'authForm__password',
    label: 'Password',
    type: 'password',
    placeholder: '**********',
    name: 'password',
    hasLineBreak: true,
  }),
];

interface RegistrationProps {
  button: Button,
  form: Form,
  signInBtn: Button
}

export class Registration extends Block<RegistrationProps> {
  constructor(props: RegistrationProps) {
    super(props);
  }

  protected initChildren() {
    this.children.form = new Form({
      formId: 'authForm',
      inputs: inputs.map((input: any) => input),
      events: {
        submit: (e: Event) => {
          e.preventDefault();

          const data = validateForm();
          AuthController.signUp(data);
        },
      },
    });

    this.children.button = new Button({
      text: 'Register',
      class: 'authorization__btn',
      formId: 'authForm',
      events: {
        click: () => {
          router.go('/chats');
        },
      },
    });

    this.children.signInBtn = new Button({
      text: 'Sign in',
      class: 'registration__link',
      events: {
        click: () => {
          router.go('/');
        },
      },
    });
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
