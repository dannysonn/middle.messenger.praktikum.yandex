import Profile from './profile';
import { renderDom } from '../../utils/renderDom';

document.addEventListener('DOMContentLoaded', () => {
  const profilePage = new Profile({});

  renderDom(profilePage);
});
