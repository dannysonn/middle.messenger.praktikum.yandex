import Button from "../../components/button/button";
import Block from "../../utils/Block";
import template from "./registration.hbs";

interface RegistrationProps {
    button?: Button
}

export default class Registration extends Block {
    constructor(props: RegistrationProps) {
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(template, {...this.props})
    }
}