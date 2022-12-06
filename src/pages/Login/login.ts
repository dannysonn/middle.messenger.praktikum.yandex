import Block from '../../utils/Block';
import template from './login.hbs';
import Input from '../../components/input/input';
import Form from '../../components/form/form';
import { validateForm } from '../../utils/validateForm';
import AuthController from '../../controllers/AuthController';
import Button from '../../components/button/button';
import { router } from '../../index';
import ChatsController from '../../controllers/ChatsController';
import { initInputsListEvents } from '../../utils/initInputsList';

const inputsData = [
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
    id: 'authForm__password',
    label: 'Password',
    type: 'password',
    placeholder: '**********',
    name: 'password',
    hasLineBreak: true,
  }),
];

interface LoginProps {

}

// eslint-disable-next-line import/prefer-default-export
export class Login extends Block {
  constructor(props: LoginProps) {
    super(props);
  }

  initChildren() {
    this.children.form = new Form({
      formId: 'authForm',
      inputs: inputsData.map((input: any) => input),
      events: {
        submit: async (e: Event) => {
          e.preventDefault();

          const data = validateForm();

          await AuthController.signIn(data).then(() => {
            AuthController.getUser();

            localStorage.setItem('currentPassword', `${data.password}`);

            ChatsController.getChats();

            router.go('/chats');
          });
        },
      },
    });

    this.children.registerBtn = new Button({
      text: 'No account?',
      class: 'registration__link',
      events: {
        click: () => {
          router.go('/registration');
          initInputsListEvents();
        },
      },
    });

    this.children.loginBtn = new Button({
      text: 'Login',
      class: 'authorization__btn',
      formId: 'authForm',
      events: {
        click: () => {

        },
      },
    });
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
