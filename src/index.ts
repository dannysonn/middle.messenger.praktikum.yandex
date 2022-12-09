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

export const router = new Router('#root');

document.addEventListener('DOMContentLoaded', async () => {
  router
    .use('/', Login)
    .use('/chats', Chats)
    .use('/registration', Registration)
    .use('/profile', Profile)
    .use('/profileChangeData', ProfileChangeData)
    .use('/profileChangePassword', ProfileChangePassword)
    .start();

  initInputsListEvents();

  await AuthController.getUser();
  await ChatsController.getChats();

  console.log(store.getState());
});
