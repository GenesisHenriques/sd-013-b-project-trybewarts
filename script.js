const loginButton = document.getElementById('login-button');
const loginUsername = document.querySelector('#login-username');
const loginPassword = document.querySelector('#login-password');
const submitButton = document.querySelector('#submit-btn');
const infoCheckbox = document.querySelector('#agreement');

function loginVerification() {
  if (loginUsername.value !== 'tryber@teste.com') {
    alert('Login ou senha inválidos.');
  } else if (loginPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

loginButton.addEventListener('click', loginVerification);

function ableButton() {
  if (infoCheckbox.checked !== false) {
    submitButton.disabled = false;
  }
  else {
    submitButton.disabled = true;
  }
}

infoCheckbox.addEventListener('click', ableButton);
