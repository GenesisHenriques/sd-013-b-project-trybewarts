const login = document.getElementById('login');
const password = document.getElementById('password');
const loginButton = document.getElementById('login-button');

const checkAgreement = document.getElementById('agreement');

document.getElementById('submit-btn').disabled = true;

function submitLogin() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function enableBtn() {
  if (checkAgreement.disabled === false) {
    document.getElementById('submit-btn').disabled = false;
  }
}

loginButton.addEventListener('click', submitLogin);
checkAgreement.addEventListener('change', enableBtn);
