<<<<<<< HEAD
const boxes = document.getElementsByClassName('subject');
const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;

function checked() {
  for (let i = 0; i < boxes.length; i += 1) {
    if (boxes[i].checked === true) {
      submitBtn.disabled = false;
    }
  }
}

function zeroChecked() {
  let nonCheckedQtd = 0;
  for (let i = 0; i < boxes.length; i += 1) {
    if (boxes[i].checked === false) {
      nonCheckedQtd += 1;
    }
  }
  if (nonCheckedQtd === boxes.length) {
    submitBtn.disabled = true;
  }
}

function ableSubmit() {
  for (let i = 0; i < boxes.length; i += 1) {
    boxes[i].addEventListener('click', checked);
  }
}

ableSubmit();

function disableSubmit() {
  for (let i = 0; i < boxes.length; i += 1) {
    boxes[i].addEventListener('click', zeroChecked);
  }
}

disableSubmit();
=======
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
>>>>>>> cc4d1318ebbdac64ea0fdc95a061a00cc8143f4b
