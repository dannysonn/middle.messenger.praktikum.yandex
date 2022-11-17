// import Profile from './profile';
// import { renderDom } from '../../utils/renderDom';
// import Button from '../../components/button/button';
// import Input from '../../components/input/input';
// import { initInputsListEvents } from '../../utils/initInputsList';
// import { validateForm } from '../../utils/validateForm';
// import Form from '../../components/form/form';
// import { router } from '../../index';
// import AuthController from '../../controllers/AuthController';
//
// const profileChangePasswordInputs = [
//   new Input({
//     wrapperClass: 'profile__item',
//     labelClass: 'content__item-label',
//     inputClass: 'content__item-data',
//     id: 'authForm__password',
//     label: 'Password',
//     type: 'password',
//     placeholder: '**********',
//     name: 'password',
//     hasLineBreak: false,
//   }),
//   new Input({
//     wrapperClass: 'profile__item',
//     labelClass: 'content__item-label',
//     inputClass: 'content__item-data',
//     id: 'authForm__password-second',
//     label: 'Password (one more)',
//     type: 'password',
//     placeholder: '**********',
//     name: 'second_password',
//     hasLineBreak: false,
//   }),
// ];
//
// export const profilePage = new Profile({
//   form: new Form({
//     formId: 'profileForm',
//     inputs: profileInputs.map((input: Input) => input),
//   }),
//
//   buttons: profileButtons.map((button: Button) => button),
//
//   profileBtn: new Button({
//     text: '',
//     class: 'profile__btn',
//     events: {
//       click: () => {
//         router.back();
//       },
//     },
//   }),
// });
//
// const profileChangeData = new Profile({
//   form: new Form({
//     formId: 'profileForm',
//     events: {
//       submit: (e: Event) => {
//         e.preventDefault();
//         validateForm();
//         renderDom('root', profilePage);
//       },
//     },
//     inputs: profileInputsChangeData.map((input: Input) => input),
//   }),
//
//   buttons: changeDataButtons.map((button: Button) => button),
//
//   profileBtn: new Button({
//     text: '',
//     class: 'profile__btn',
//     events: {
//       click: () => {
//         router.back();
//       },
//     },
//   }),
// });
//
// const profileChangePassword = new Profile({
//   form: new Form({
//     formId: 'profileForm',
//     inputs: profileChangePasswordInputs.map((input: Input) => input),
//     events: {
//       submit: (e: Event) => {
//         e.preventDefault();
//         validateForm();
//         renderDom('root', profilePage);
//       },
//     },
//   }),
//
//   buttons: changePasswordButtons.map((button: Button) => button),
//
//   profileBtn: new Button({
//     text: '',
//     class: 'profile__btn',
//     events: {
//       click: () => {
//         router.back();
//       },
//     },
//   }),
// });
//
// export { Profile as default } from './profile';

import {withStore} from "../../utils/Store";
import {Profile} from "./profile";

const withUser = withStore(state => ({...state.user}));

export default withUser(Profile);
