import Login from './login';
import { renderDom } from '../../utils/renderDom';
import Button from '../../components/button/button';
import Input from '../../components/input/input';

document.addEventListener('DOMContentLoaded', () => {
  const loginPage = new Login({
    button: new Button({
      text: 'Login',
    }),
    loginInput: new Input({
      id: 'authForm__login',
      label: 'Login',
      type: 'text',
      placeholder: 'programmer2000',
      name: 'login',
    }),
    passwordInput: new Input({
      id: 'authForm__password',
      label: 'Password',
      type: 'password',
      placeholder: '**********',
      name: 'password',
    }),
  });

  renderDom(loginPage);
});
