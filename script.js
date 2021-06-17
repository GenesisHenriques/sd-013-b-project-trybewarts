const login = document.querySelector('#login');
const password = document.querySelector('#password');
const bttn = document.querySelector('#bttn');
const sendBttn = document.querySelector('#submit-btn');
const checkBox = document.querySelector('#agreement');
const tArea = document.getElementById('textarea');

function validEmail() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  }
  if (login.value !== 'tryber@teste.com' || password.value !== '123456') {
    alert('Login ou senha inválidos.');
  }
}

bttn.addEventListener('click', validEmail);

function termsChanged() {
  if (this.checked) {
    sendBttn.disabled = false;
  } else {
    sendBttn.disabled = true;
  }
}

checkBox.addEventListener('click', termsChanged);

function limiteTextarea() {
  const quant = 500;
  const total = tArea.value.length;
  if (total <= quant) {
    const resto = quant - total;
    document.getElementById('counter').innerHTML = resto;
  }
}

tArea.addEventListener('keyup', limiteTextarea);
