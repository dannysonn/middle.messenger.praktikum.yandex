import Registration from './registration';
import { renderDom } from '../../utils/renderDom';
import Button from '../../components/button/button';
import Input from '../../components/input/input';

document.addEventListener('DOMContentLoaded', () => {
  const registrationPage = new Registration({
    button: new Button({ text: 'Register' }),
    emailInput: new Input({
      id: 'authForm__email',
      label: 'Email',
      type: 'email',
      placeholder: 'programmer2000@google.com',
      name: 'email',
    }),
    loginInput: new Input({
      id: 'authForm__login',
      label: 'Login',
      type: 'text',
      placeholder: 'programmer2000',
      name: 'login',
    }),
    nameInput: new Input({
      id: 'authForm__name',
      label: 'Name',
      type: 'text',
      placeholder: 'Elon',
      name: 'first_name',
    }),
    surnameInput: new Input({
      id: 'authForm__surname',
      label: 'Surname',
      type: 'text',
      placeholder: 'Musk',
      name: 'second_name',
    }),
    phoneInput: new Input({
      id: 'authForm__phone',
      label: 'Phone',
      type: 'tel',
      placeholder: '999-99-999',
      name: 'phone',
    }),
    passwordInput: new Input({
      id: 'authForm__password',
      label: 'Password',
      type: 'password',
      placeholder: '**********',
      name: 'password',
    }),
    secondPasswordInput: new Input({
      id: 'authForm__password-second',
      label: 'Password (one more)',
      type: 'password',
      placeholder: '**********',
      name: 'second_password',
    }),
  });

  renderDom(registrationPage);
});
