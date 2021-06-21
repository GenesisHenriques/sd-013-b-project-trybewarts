const defaultLogin = 'tryber@teste.com';
const defaultPassword = '123456';
const btnLogar = document.getElementById('btn-logar');
const inputLogin = document.getElementById('input-login');
const inputPassword = document.getElementById('input-password');

function validateLogin (login, password) {
  if (login === defaultLogin && password === defaultPassword) {
    alert(`Olá, Tryber!`);
  } else {
    alert(`Login ou senha inválidos.`);
  }
}

function login () {
  validateLogin(inputLogin.value, inputPassword.value);
}

btnLogar.addEventListener('click', login);
