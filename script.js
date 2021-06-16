const btnLogin = document.querySelector('.trybewarts-login button');
const inputLoginEmail = document.querySelector('.input-login-email');
const inputLoginPassword = document.querySelector('.input-login-password');
const checkbox = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');

btnSubmit.disabled = true;

const authLogin = () => {
  if (inputLoginEmail.value !== 'tryber@teste.com') return false;

  if (inputLoginPassword.value !== '123456') return false;

  return true;
};

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();

  const isLoggedIn = authLogin();

  if (isLoggedIn) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

checkbox.addEventListener('change', (e) => {
  e.preventDefault();

  if (checkbox.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});
