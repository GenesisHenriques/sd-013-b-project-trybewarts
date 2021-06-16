const email = document.querySelector('#input-login-email');
const password = document.querySelector('#input-login-password');
const loginButton = document.querySelector('#loginButton');

function login() {
  const validEmail = email.value;
  const validPassword = password.value;
  const emailFormat = 'tryber@teste.com';
  const passwordFormat = '123456';
  if ((validEmail !== emailFormat) || (validPassword !== passwordFormat)) {
    email.value = '';
    password.value = '';
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
loginButton.addEventListener('click', login);
