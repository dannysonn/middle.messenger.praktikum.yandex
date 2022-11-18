export const validateForm = () => {
  let isValid: boolean = true;
  const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => {
    if (input.classList.contains('invalid')) {
      isValid = false;
    }
  });

  if (isValid) {
    return getFormObject();
  } else {
    alert('invalid form');
    throw new Error('Form validation error');
  }
};

let getFormObject = () => {
  const inputs = document.querySelectorAll('input');
  const resultObject: any = {};

  inputs.forEach((input) => {
    const key: string | null = input.getAttribute('name');
    const { value } = input;

    resultObject[`${key}`] = value;
  });

  return resultObject;
};
