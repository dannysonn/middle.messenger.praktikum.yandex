import Profile from "./profile";
import {renderDom} from "../../utils/renderDom";

document.addEventListener('DOMContentLoaded', () => {
   let profilePage = new Profile({});

   renderDom(profilePage);
});