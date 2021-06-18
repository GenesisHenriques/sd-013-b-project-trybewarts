const inputLogin = document.querySelector('#login');
const inputPassword = document.querySelector('#password');
const loginButton = document.querySelector('#buttonLogin');
const submitBtn = document.querySelector('#submit-btn');
const agreementBox = document.querySelector('#agreement');

function authenticateLogin() {
  if (inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
loginButton.addEventListener('click', authenticateLogin);

function checkUserAgreement() {
  if (agreementBox.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
submitBtn.addEventListener('click', checkUserAgreement);
