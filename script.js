const login = document.getElementById('login');
const password = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const count = document.querySelector('textarea');
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

function counter() {
  const text = document.querySelector('textarea').value;
  const counter1 = document.querySelector('#counter');
  let contador = 0;
  let resultado = 0;
  counter1.innerHTML = '500';
  for (let index = 0; index < text.length; index += 1) {
    contador += 1;
    const max = 500;
    resultado = max - contador;
    counter1.innerHTML = resultado;
  }
}

loginButton.addEventListener('click', submitLogin);
checkAgreement.addEventListener('click', enableBtn);
count.addEventListener('input', counter);
window.onload = checkAgreement;
