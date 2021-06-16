const inputLogin = document.querySelector('#login');
const inputPassword = document.querySelector('#password');

document.querySelector('#btn-login').addEventListener('click', () => {
  if (inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert ('Olá, Tryber!');
  } else {
    alert ('Login ou senha inválidos.');
  }
});