export let validateForm = () => {
    let isValid: boolean = true;
    let inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {
        if (input.classList.contains('invalid')) {
            isValid = false;
        }
    });

    if (isValid) {
        console.log(getFormObject());
    } else {
        throw new Error('Form validation error');
    }
}

let getFormObject = () => {
    let inputs = document.querySelectorAll('input');
    let resultObject = {};

    inputs.forEach(input => {
        let key: string | null = input.getAttribute('type');
        let value: string = input.value;

        resultObject[`${key}`] = value;
    });

    return resultObject;
}