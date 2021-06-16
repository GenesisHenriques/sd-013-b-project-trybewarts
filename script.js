const inputLogin = document.querySelector('#login');
const inputPassword = document.querySelector('#password');
const agreement = document.querySelector('#agreement');
const button = document.querySelector('#submit-btn');

document.querySelector('#btn-login').addEventListener('click', () => {
  if (inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

agreement.addEventListener('change', () => {
  if (button.disabled === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
 
  // Aprendi sobre button.disabled, neste link
  // https://flexiple.com/disable-button-javascript/
});
