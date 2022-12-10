import AuthController from './controllers/AuthController';
import Router from './utils/Router';
import { initInputsListEvents } from './utils/initInputsList';
import Login from './pages/Login/index';
import Chats from './pages/Chats';
import Registration from './pages/Registration';
import Profile from './pages/Profile';
import ProfileChangeData from './pages/ProfileChangeData';
import ProfileChangePassword from './pages/ProfileChangePassword';
import ChatsController from './controllers/ChatsController';
import { store } from './utils/Store';
import './styles/css/style.css';
import { error4Page } from './pages/Error4';
import { error5Page } from './pages/Error5';

export const router = new Router('#root');

document.addEventListener('DOMContentLoaded', async () => {
  router
    .use('/', Login)
    .use('/chats', Chats)
    .use('/registration', Registration)
    .use('/profile', Profile)
    .use('/profileChangeData', ProfileChangeData)
    .use('/profileChangePassword', ProfileChangePassword)
    .use('/error4', error4Page)
    .use('/error5', error5Page)
    .start();

  initInputsListEvents();

  try {
    await AuthController.getUser();
  } catch (e) {
    console.error(e);
  }

  try {
    await ChatsController.getChats();
  } catch (e) {
    console.error(e);
  }

  console.log(store.getState());
});
