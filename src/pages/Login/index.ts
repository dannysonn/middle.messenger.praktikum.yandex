import Login from './login';
import { renderDom } from '../../utils/renderDom';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import {validate} from "../../utils/validate";
import {initInputsListEvents} from "../../utils/initInputsList";
import {validateForm} from "../../utils/validateForm";
import {Form} from "../../components/form/form";

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
  })
]

document.addEventListener('DOMContentLoaded', () => {
  const loginPage = new Login({
    form: new Form({
      formId: 'authForm',
      inputs: inputs.map((input: any) => input),
      events: {
        submit: (e) => {
          e.preventDefault();
          validateForm();
        }
      }
    }),
    button: new Button({
      text: 'Login',
      class: 'authorization__btn',
      formId: 'authForm',
    }),
  });

  renderDom(loginPage);

  initInputsListEvents();
});
