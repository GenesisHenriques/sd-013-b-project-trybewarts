const login = document.getElementById('login');
const password = document.getElementById('password');
const loginButton = document.getElementById('login-button');

const checkAgreement = document.getElementById('agreement');

const submitBTN = document.getElementById('submit-btn');

submitBTN.disabled = true;

function submitLogin() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function enableBtn() {
  if (checkAgreement.checked === true) {
    // console.log('enable');
    submitBTN.disabled = false;
  } else {
    // console.log('disbale');
    submitBTN.disabled = true;
  }
}

loginButton.addEventListener('click', submitLogin);
checkAgreement.addEventListener('click', enableBtn);
window.onload = checkAgreement;
