import Button from "../../components/button/button";
import Block from "../../utils/Block";
import template from "./login.hbs";

interface LoginProps {

}

export default class Login extends Block {
    constructor(props: LoginProps) {
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(template, {...this.props})
    }

}