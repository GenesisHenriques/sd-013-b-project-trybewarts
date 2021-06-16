// Validar acesso do login

const login = document.getElementById('login-input');
const password = document.getElementById('password-input');
const enterButton = document.getElementById('enter-button');

function checkLogin() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

enterButton.addEventListener('click', checkLogin);

const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;

function checked() {
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  }
}

function noChecked() {
  if (agreement.checked === false) {
    submitBtn.disabled = true;
  }
}

function ableSubmit() {
  agreement.addEventListener('click', checked);
}

ableSubmit();

function disableSubmit() {
  agreement.addEventListener('click', noChecked);
}

disableSubmit();
