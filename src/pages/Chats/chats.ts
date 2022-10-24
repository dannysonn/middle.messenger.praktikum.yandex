import template from "./chats.hbs";
import Block from "../../utils/Block";

interface ChatsProps {
    chats?: object[];
}

export default class Chats extends Block {
    constructor(props: ChatsProps) {
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(template, {...this.props})
    }
}
