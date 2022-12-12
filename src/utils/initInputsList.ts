import { validate } from './validate';

export const initInputsListEvents = (): void => {
  const inputNodes = document.querySelectorAll('input');

  inputNodes.forEach((input) => {
    input.addEventListener('focus', (e) => {
      // @ts-ignore
      validate(e.target.value, e.target.attributes.type.value, e.target.attributes.id.value);
    });
    input.addEventListener('blur', (e) => {
      // @ts-ignore
      validate(e.target.value, e.target.attributes.type.value, e.target.attributes.id.value);
    });
    input.addEventListener('keypress', (e) => {
      // @ts-ignore
      validate(e.target.value, e.target.attributes.type.value, e.target.attributes.id.value);
    });
  });
};
