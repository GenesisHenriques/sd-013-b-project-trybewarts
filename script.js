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

const formMainInfoInObjectFormat = {};

function getNameInObjectFormact() {
  const getInputNameValue = document.querySelector('#input-name').value;
  const getInputLastNameValue = document.querySelector('#input-lastname').value;
  formMainInfoInObjectFormat.name = getInputNameValue.concat(' ', getInputLastNameValue);
  return formMainInfoInObjectFormat;
}

getNameInObjectFormact();

function getEmailInObjectFormact() {
  const getInputEmailValue = document.querySelector('#input-email').value;
  formMainInfoInObjectFormat.email = getInputEmailValue;
  return formMainInfoInObjectFormat;
}

getEmailInObjectFormact();

function getTextareaInObjectFormact() {
  const getTextareaValue = document.querySelector('#textarea').value;
  if (getTextareaValue === '') {
    formMainInfoInObjectFormat.comment = '';
  } else {
    formMainInfoInObjectFormat.comment = getTextareaValue;
  }
  return formMainInfoInObjectFormat;
}

getTextareaInObjectFormact();

// function submitButtonEventListener() {
//   const getSubmitButton = document.getElementById('submit-btn');
//   console.log(getSubmitButton);
//   getSubmitButton.addEventListener('click', () => {
//     event.preventDefault();
//     const getMain = document.querySelector('.main');
//     getMain.style.display = 'none';
//   });
// }

// submitButtonEventListener();

window.onload = function start() {
  disableButton();
  loginButtonAddEventListner();
  countdownTextAreaMaxLength();
};
