import Block from "../../utils/Block";
import Input from "../input/input";
import template from "./form.hbs";

interface FormProps {
    inputs: Input[];
    formId: string;
    events?: any;
}

export class Form extends Block {
    constructor(props: FormProps) {
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(template, {...this.props});
    }
}