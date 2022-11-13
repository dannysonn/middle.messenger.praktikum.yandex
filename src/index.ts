import {loginPage} from "./pages/Login";
import Router from "./utils/Router";
import {initInputsListEvents} from "./utils/initInputsList";
import {chatsPage} from "./pages/Chats";
import {error4Page} from "./pages/Error4";
import {error5Page} from "./pages/Error5";
import {profilePage} from "./pages/Profile";
import {registrationPage} from "./pages/Registration";

export const router = new Router("root");

document.addEventListener('DOMContentLoaded', () => {
    router
        .use('/', loginPage)
        .use('/chats', chatsPage)
        .use('/error4', error4Page)
        .use('/error5', error5Page)
        .use('/profile', profilePage)
        .use('/registration', registrationPage)
        .start();

    initInputsListEvents();
});