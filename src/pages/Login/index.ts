import Login from './login';
import { renderDom } from '../../utils/renderDom';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import {validate} from "../../utils/validate";
import {initInputsListEvents} from "../../utils/initInputsList";
import {validateForm} from "../../utils/validateForm";

const inputs = [
  new Input({
    class: 'authForm__item',
    id: 'authForm__login',
    label: 'Login',
    type: 'login',
    placeholder: 'programmer2000',
    name: 'login',
    hasLineBreak: true,
  }),
  new Input({
    class: 'authForm__item',
    id: 'authForm__password',
    label: 'Password',
    type: 'password',
    placeholder: '**********',
    name: 'password',
    hasLineBreak: true,
  })
]

document.addEventListener('DOMContentLoaded', () => {
  const loginPage = new Login({
    button: new Button({
      text: 'Login',
      class: 'authorization__btn',
      events: {
        click: (e) => {
          validateForm();
        }
      }
    }),
    inputs: inputs.map((input: any) => input),
  });

  renderDom(loginPage);

  initInputsListEvents();
});
