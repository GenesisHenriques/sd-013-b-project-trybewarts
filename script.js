const loginButton = document.querySelector('#login-button');
const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');

function verifyLogin() {
  if (loginInput.value !== 'tryber@teste.com') return false;
  if (passwordInput.value !== '123456') return false;
  return true;
}
loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (verifyLogin()) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
