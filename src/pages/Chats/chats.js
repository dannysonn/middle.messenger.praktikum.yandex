import {chatsTmpl} from "./chats.hbs";
import {renderDom} from "../../utils/render";

let store = {
    chats: [
        {
            username: 'John',
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            time: '10:20',
            messagesCount: 5,
            userAvatar: 'https://via.placeholder.com/150'
        },
        {
            username: 'John',
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            time: '10:20',
            messagesCount: 5,
            userAvatar: 'https://via.placeholder.com/150'
        },
        {
            username: 'John',
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            time: '10:20',
            messagesCount: 5,
            userAvatar: 'https://via.placeholder.com/150'
        },
    ]
}

renderDom(chatsTmpl, store);