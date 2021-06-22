const defaultLogin = 'tryber@teste.com';
const defaultPassword = '123456';
const btnLogar = document.getElementById('btn-logar');
const inputLogin = document.getElementById('input-login');
const inputPassword = document.getElementById('input-password');
const agreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

const validateLogin = (login, password) => {
  if (login === defaultLogin && password === defaultPassword) {
    alert(`Olá, Tryber!`);
  } else {
    alert(`Login ou senha inválidos.`);
  }
};

const login = ()  => validateLogin(inputLogin.value, inputPassword.value);

const iAgree = () => {
  if (agreement.checked === true) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', 'disabled');
  }
};

window.onload = function() {
  btnLogar.addEventListener('click', login);
  agreement.addEventListener('click', iAgree);
};
