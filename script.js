const login = document.querySelector('#login');
const password = document.querySelector('#password');
const bttn = document.querySelector('#bttn');
const sendBttn = document.querySelector('#submit-btn');
const checkBox = document.querySelector('#agreement');

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
