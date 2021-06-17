function validateLoginForm() {
  const defaultLogin = 'tryber@teste.com';
  const defaultPassword = '123456';
  const validatePassword = document.getElementById('password');
  const validateLogin = document.getElementById('user');
  if (validatePassword.value !== defaultPassword) {
    alert('Login ou senha inválidos.');
  } else if (validateLogin.value !== defaultLogin) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

function loginButtonAddEventListner() {
  const loginButton = document.getElementById('btn-login');
  loginButton.addEventListener('click', validateLoginForm);
}

function disableButton() {
  const submitButton = document.getElementById('submit-btn');
  const agreement = document.getElementById('agreement');
  submitButton.disabled = true;
  agreement.addEventListener('click', () => {
    if (agreement.checked) {
      submitButton.disabled = false;
    }
    if (!agreement.checked) {
      submitButton.disabled = true;
    }
  });
}

function countdownTextAreaMaxLength() {
  const textArea = document.querySelector('#textarea');
  const createEnterText = document.getElementById('counter');
  createEnterText.innerText = textArea.maxLength;
  textArea.addEventListener('keyup', () => {
    createEnterText.innerText = textArea.maxLength - textArea.value.length;
  });
}

function getKey(className) {
  switch (className) {
  case 'family':
    return 'Família';
  case 'Matérias':
    return 'Matérias';
  case 'rate':
    return 'Avaliação';
  default:
    break;
  }
}

function getValueOfTheObject(inputClass, formMainInfoInObjectFormat) {
  const key = getKey(inputClass.name);
  if (key in formMainInfoInObjectFormat) {
    formMainInfoInObjectFormat[key]
    += ' '.concat(inputClass.value);
  } else {
    formMainInfoInObjectFormat[key] = inputClass.value;
  }
}

function getFamiliaInObjectFormat(formMainInfoInObjectFormat, className) {
  const inputClassName = document.getElementsByClassName(className);
  for (let index = 0; index < inputClassName.length; index += 1) {
    const inputClass = inputClassName[index];
    if (inputClass.checked) {
      getValueOfTheObject(inputClass, formMainInfoInObjectFormat);
    }
  }
  return formMainInfoInObjectFormat;
}

function submitButtonEventListener() {
  const submitButton = document.getElementById('submit-btn');
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let formMainInfoInObjectFormat = {};
    formMainInfoInObjectFormat = getFamiliaInObjectFormat(formMainInfoInObjectFormat, 'familia');
    formMainInfoInObjectFormat = getFamiliaInObjectFormat(formMainInfoInObjectFormat, 'subject');
    formMainInfoInObjectFormat = getFamiliaInObjectFormat(formMainInfoInObjectFormat, 'avaliacao');
    console.log(formMainInfoInObjectFormat);
  });
}

window.onload = function start() {
  disableButton();
  loginButtonAddEventListner();
  countdownTextAreaMaxLength();
  submitButtonEventListener();
};
