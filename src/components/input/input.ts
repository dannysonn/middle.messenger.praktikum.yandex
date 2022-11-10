import Block from '../../utils/Block';
import template from './input.hbs';

interface InputProps {
  wrapperClass?: string;
  labelClass?: string;
  inputClass? :string;
  id?: string;
  label: string;
  type: string;
  placeholder: string;
  name: string;
  hasLineBreak: boolean;
  readonly?: boolean;
}

export default class Input extends Block<InputProps> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: InputProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
