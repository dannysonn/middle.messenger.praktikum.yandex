import AuthController from './controllers/AuthController';
import Router from './utils/Router';
import { initInputsListEvents } from './utils/initInputsList';
import Login from './pages/Login/index';
import Chats from './pages/Chats';
import Registration from './pages/Registration';
import Profile from './pages/Profile';

export const router = new Router('root');

document.addEventListener('DOMContentLoaded', async () => {
  await AuthController.getUser();

  router
    .use('/', Login, {})
    .use('/chats', Chats, {})
    .use('/registration', Registration, {})
    .use('/profile', Profile, {})
    .start();

  initInputsListEvents();
});
