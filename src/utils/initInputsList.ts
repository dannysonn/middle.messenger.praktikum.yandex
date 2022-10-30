import {validate} from "./validate";

export let initInputsListEvents = (): void => {
    let inputNodes = document.querySelectorAll('input');

    inputNodes.forEach(input => {
        input.addEventListener('focus', (e) => {
            validate(e.target.value, e.target.attributes.type.value, e.target.attributes.id.value);
        });
        input.addEventListener('blur', (e) => {
            validate(e.target.value, e.target.attributes.type.value, e.target.attributes.id.value);
        });
    });
}