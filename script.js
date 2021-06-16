const loginButton = document.getElementById('login-button');
const loginUsername = document.querySelector('#login-username');
const loginPassword = document.querySelector('#login-password');

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
