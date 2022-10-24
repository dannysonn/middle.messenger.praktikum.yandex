import Chats from "./chats";
import {renderDom} from "../../utils/renderDom";

document.addEventListener('DOMContentLoaded', () => {
   const chatsPage = new Chats({});

   renderDom(chatsPage);
});
