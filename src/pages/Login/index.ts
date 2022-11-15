import Login from './login';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Form from '../../components/form/form';

import { validateForm } from '../../utils/validateForm';
import AuthController from '../../controllers/AuthController';

const inputs = [
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

export const loginPage = new Login({
  form: new Form({
    formId: 'authForm',
    inputs: inputs.map((input: any) => input),
    events: {
      submit: (e: Event) => {
        e.preventDefault();

        const data = validateForm();
        AuthController.signIn(data);
      },
    },
  }),
  button: new Button({
    text: 'Login',
    class: 'authorization__btn',
    formId: 'authForm',
    events: {
      click: () => {

      },
    },
  }),
  registerBtn: new Button({
    text: 'No account?',
    class: 'registration__link',
    events: {
      click: () => {
        // юзаю вместо router.go() потому что у меня вместо тэга <a> используется <button form="formId">,
        // из-за этого не работают переходы по стрелкам через роутер
        window.location.href = '/registration';
      },
    },
  }),
});
