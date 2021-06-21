const email = document.getElementById('input-login');
const password = document.getElementById('input-senha');
const loginButton = document.getElementById('entrar');
const agreementCheckBox = document.getElementById('agreement');
const sendButton = document.getElementById('submit-btn');
let textarea = document.getElementById('textarea');

function checkEmail() {
  for (let letter = 0; letter < email.value.length; letter += 1) {
    if (email.value[letter] === '@') {
      return true;
    }
  }
  return false;
}

function passwordCheck() {
  if (password.value !== '') {
    return true;
  }
  return false;
}

function checkLogin() {
  if (passwordCheck() === true && checkEmail() === true) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', checkLogin);

function enableSendButton() {
  if (agreementCheckBox.checked) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}

function counter(texto) {
  document.getElementById('counter').innerHTML = 500 - texto.target.value.length;
}

textarea.addEventListener('keyup', counter);
agreementCheckBox.addEventListener('click', enableSendButton);


