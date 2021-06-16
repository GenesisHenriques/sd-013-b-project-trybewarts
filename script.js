const login = document.getElementById('input-login');
const password = document.getElementById('input-password');
const btnLogin = document.getElementById('btn-login');
const checkForm = document.getElementById('agreement');
const btnForm = document.getElementById('submit-btn');

function checkCredentials() {
  // prettier-ignore
  if (login.value === 'tryber@teste.com' && password.value === '123456')alert('Olá, Tryber!');
  else alert('Login ou senha inválidos.');
}

function showBtn() {
  btnForm.disabled = checkForm.checked !== true;
}

btnLogin.addEventListener('click', checkCredentials);

checkForm.addEventListener('change', showBtn);
