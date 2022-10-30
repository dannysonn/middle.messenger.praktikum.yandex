import Profile from './profile';
import { renderDom } from '../../utils/renderDom';
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import {initInputsListEvents} from "../../utils/initInputsList";
import {validateForm} from "../../utils/validateForm";

let profileButtons = [
  new Button({
    class: 'profile__footer-item',
    text: 'Change data',
    events: {
      click: (e) => {
        renderDom(profileChangeData);
        initInputsListEvents();
      }
    }
  }),
  new Button({
    class: 'profile__footer-item',
    text: 'Change password',
    events: {
      click: (e) => {
        renderDom(profileChangePassword);
        initInputsListEvents();
      }
    }
  }),
  new Button({
    class: 'profile__footer-item profile__footer-item--logout',
    text: 'Logout',
  }),
]

let changeDataButtons = [
  new Button({
    class: 'profile__footer-item',
    text: 'Save data',
    events: {
      click: (e) => {
        validateForm();
        renderDom(profilePage);
      }
    }
  }),
]

let changePasswordButtons = [
  new Button({
    class: 'profile__footer-item',
    text: 'Save password',
    events: {
      click: (e) => {
        validateForm();
        renderDom(profilePage);
      }
    }
  }),
]

let profileInputs = [
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__email',
    label: 'Email',
    type: 'email',
    placeholder: 'programmer2000@google.com',
    name: 'email',
    hasLineBreak: false,
    readonly: true,
  }),
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__login',
    label: 'Login',
    type: 'login',
    placeholder: 'programmer2000',
    name: 'login',
    hasLineBreak: false,
    readonly: true,
  }),
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__name',
    label: 'Name',
    type: 'name',
    placeholder: 'Elon',
    name: 'first_name',
    hasLineBreak: false,
    readonly: true,
  }),
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__surname',
    label: 'Surname',
    type: 'surname',
    placeholder: 'Musk',
    name: 'second_name',
    hasLineBreak: false,
    readonly: true,
  }),
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__phone',
    label: 'Phone',
    type: 'phone',
    placeholder: '999-99-999',
    name: 'phone',
    hasLineBreak: false,
    readonly: true,
  }),
]

let profileInputsChangeData = [
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__email',
    label: 'Email',
    type: 'email',
    placeholder: 'programmer2000@google.com',
    name: 'email',
    hasLineBreak: false,
  }),
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__login',
    label: 'Login',
    type: 'login',
    placeholder: 'programmer2000',
    name: 'login',
    hasLineBreak: false,
  }),
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__name',
    label: 'Name',
    type: 'name',
    placeholder: 'Elon',
    name: 'first_name',
    hasLineBreak: false,
  }),
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__surname',
    label: 'Surname',
    type: 'surname',
    placeholder: 'Musk',
    name: 'second_name',
    hasLineBreak: false,
  }),
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__phone',
    label: 'Phone',
    type: 'phone',
    placeholder: '999-99-999',
    name: 'phone',
    hasLineBreak: false,
  }),
]

let profileChangePasswordInputs = [
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__password',
    label: 'Password',
    type: 'password',
    placeholder: '**********',
    name: 'password',
    hasLineBreak: false,
  }),
  new Input({
    wrapperClass: 'profile__item',
    labelClass: 'content__item-label',
    inputClass: 'content__item-data',
    id: 'authForm__password-second',
    label: 'Password (one more)',
    type: 'password',
    placeholder: '**********',
    name: 'second_password',
    hasLineBreak: false,
  }),
]



const profilePage = new Profile({
  inputs: profileInputs.map((input: Input) => input),
  buttons: profileButtons.map((button: Button) => button)
});

const profileChangeData = new Profile({
  inputs: profileInputsChangeData.map((input: Input) => input),
  buttons: changeDataButtons.map((button: Button) => button)
});

const profileChangePassword = new Profile({
  inputs: profileChangePasswordInputs.map((input: Input) => input),
  buttons: changePasswordButtons.map((button: Button) => button)
});

document.addEventListener('DOMContentLoaded', () => {
  renderDom(profilePage);
});
