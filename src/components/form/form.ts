import Block from '../../utils/Block';
import Input from '../input/input';
import template from './form.hbs';

interface FormProps {
  inputs: Input[];
  formId: string;
  events?: any;
}

export default class Form extends Block<Record<string, any>> {
  constructor(props: FormProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
