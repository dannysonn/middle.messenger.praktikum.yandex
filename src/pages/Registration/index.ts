import Registration from './registration';
import { renderDom } from '../../utils/renderDom';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import {initInputsListEvents} from "../../utils/initInputsList";
import {validateForm} from "../../utils/validateForm";
import {Form} from "../../components/form/form";

let inputs = [
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
  new Input({
    wrapperClass: 'authForm__item',
    id: 'authForm__password-second',
    label: 'Password (one more)',
    type: 'password',
    placeholder: '**********',
    name: 'second_password',
    hasLineBreak: true,
  }),
];

document.addEventListener('DOMContentLoaded', () => {
  const registrationPage = new Registration({
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
      text: 'Register',
      class: 'authorization__btn',
      formId: 'authForm',
    }),
  });

  renderDom(registrationPage);

  initInputsListEvents();
});
