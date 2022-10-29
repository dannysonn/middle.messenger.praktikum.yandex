import Registration from './registration';
import { renderDom } from '../../utils/renderDom';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import {initInputsListEvents} from "../../utils/initInputsList";
import {validateForm} from "../../utils/validateForm";

let inputs = [
  new Input({
    id: 'authForm__email',
    label: 'Email',
    type: 'email',
    placeholder: 'programmer2000@google.com',
    name: 'email',
  }),
  new Input({
    id: 'authForm__login',
    label: 'Login',
    type: 'login',
    placeholder: 'programmer2000',
    name: 'login',
  }),
  new Input({
    id: 'authForm__name',
    label: 'Name',
    type: 'name',
    placeholder: 'Elon',
    name: 'first_name',
  }),
  new Input({
    id: 'authForm__surname',
    label: 'Surname',
    type: 'surname',
    placeholder: 'Musk',
    name: 'second_name',
  }),
  new Input({
    id: 'authForm__phone',
    label: 'Phone',
    type: 'phone',
    placeholder: '999-99-999',
    name: 'phone',
  }),
  new Input({
    id: 'authForm__password',
    label: 'Password',
    type: 'password',
    placeholder: '**********',
    name: 'password',
  }),
  new Input({
    id: 'authForm__password-second',
    label: 'Password (one more)',
    type: 'password',
    placeholder: '**********',
    name: 'second_password',
  }),
];

document.addEventListener('DOMContentLoaded', () => {
  const registrationPage = new Registration({
    button: new Button({
      text: 'Register',
      class: 'authorization__btn',
      events: {
        click: (e) => {
          validateForm();
        }
      }
    }),
    inputs: inputs.map((input: any) => input),
  });

  renderDom(registrationPage);

  initInputsListEvents();
});
