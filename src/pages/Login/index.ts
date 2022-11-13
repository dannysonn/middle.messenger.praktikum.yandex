import Login from './login';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Form from '../../components/form/form';

import {validateForm} from '../../utils/validateForm';

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
                validateForm();
            },
        },
    }),
    button: new Button({
        text: 'Login',
        class: 'authorization__btn',
        formId: 'authForm',
        events: {
            click: () => {
                window.location.href = '/chats';
            }
        }
    }),
    registerBtn: new Button({
        text: 'No account?',
        class: 'registration__link',
        events: {
            click: () => {
                window.location.href = '/registration'
            }
        }
    }),
});
