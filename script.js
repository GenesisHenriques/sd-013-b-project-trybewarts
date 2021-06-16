const trybeEmail = document.getElementById('trybe-email');
const trybePassword = document.getElementById('trybe-password');
const submitBtn = document.getElementById('submit-btn');

function validateLogin() {
  if (
    trybeEmail.value !== 'tryber@teste.com'
    || trybePassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

window.onload = function main() {
  submitBtn.addEventListener('click', validateLogin);
};
