export const validateForm = () => {
  let isValid: boolean = true;
  const inputs = document.querySelectorAll('input');

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
};

let getFormObject = () => {
  const inputs = document.querySelectorAll('input');
  const resultObject = {};

  inputs.forEach((input) => {
    const key: string | null = input.getAttribute('type');
    const { value } = input;

    resultObject[`${key}`] = value;
  });

  return resultObject;
};
