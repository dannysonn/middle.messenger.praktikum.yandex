import template from "./button.hbs";
import Block from "../../utils/Block";

interface ButtonProps {
    text: string,
}

class Button extends Block {
    constructor(props: ButtonProps) {
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(template, {...this.props})
    }
}
