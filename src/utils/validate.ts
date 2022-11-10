enum ValidationType {
  EMAIL = 'email',
  LOGIN = 'login',
  NAME = 'name',
  SURNAME = 'surname',
  PHONE = 'phone',
  PASSWORD = 'password',
  MESSAGE = 'message',
}

export const validate = (inputValue: string, type: string, inputId: string) => {
  let isValid: boolean = false;
  const input = document.getElementById(inputId);

  if (input === null) {
    throw new Error('Input not exists');
  }

  switch (type) {
    case ValidationType.EMAIL:
      isValid = /^[A-Za-z\d_-]+@[A-Za-z].[A-Za-z]/.test(inputValue);
      break;

    case ValidationType.LOGIN:
      if (inputValue.length < 3 || inputValue.length > 20) {
        isValid = false;
        break;
      }

      isValid = /^[A-Za-z\d-_][A-Za-z]+[A-Za-z\d_-]*$/.test(inputValue);
      break;

    case ValidationType.NAME:
      isValid = /^[A-ZА-Я]+[A-Za-zА-Яа-я]*$/.test(inputValue);
      break;

    case ValidationType.SURNAME:
      isValid = /^[A-ZА-Я]+[A-Za-zА-Яа-я]*$/.test(inputValue);
      break;

    case ValidationType.PHONE:
      isValid = /^[?\d]/.test(inputValue);
      break;

    case ValidationType.PASSWORD:
      if (inputValue.length < 8 || inputValue.length > 40) {
        isValid = false;
        break;
      }
      isValid = /^(?=.*[a-zA-Z\d])/.test(inputValue);
      break;

    case ValidationType.MESSAGE:
      if (inputValue.length > 0) {
        isValid = true;
      }
      break;

    default:
      break;
  }

  if (!isValid) {
    input.classList.add('invalid');
  } else {
    input.classList.remove('invalid');
  }
};
