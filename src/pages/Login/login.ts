import Block from '../../utils/Block';
import template from './login.hbs';
import Input from '../../components/input/input';
import Form from '../../components/form/form';
import { validateForm } from '../../utils/validateForm';
import AuthController from '../../controllers/AuthController';
import Button from '../../components/button/button';
import Router from "../../utils/Router";

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

export class Login extends Block<LoginProps> {
  constructor(props: LoginProps) {
    super(props);
  }

  initChildren() {
    this.children.form = new Form({
      formId: 'authForm',
      inputs: inputsData.map((input: any) => input),
      events: {
        submit: (e: Event) => {
          e.preventDefault();

          const data = validateForm();
          AuthController.signIn(data);
        },
      },
    });

    this.children.registerBtn = new Button({
      text: 'No account?',
      class: 'registration__link',
      events: {
        click: () => {
          const router = new Router();
          router.go('/registration');
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
