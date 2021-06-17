const login = document.getElementById('input-login');
const password = document.getElementById('input-password');
const btnLogin = document.getElementById('btn-login');
const checkForm = document.getElementById('agreement');
const btnForm = document.getElementById('submit-btn');
const text = document.getElementById('textarea');
const counter = document.getElementById('counter');

function checkCredentials() {
  // prettier-ignore
  if (login.value === 'tryber@teste.com' && password.value === '123456')alert('Olá, Tryber!');
  else alert('Login ou senha inválidos.');
}

function showBtn() {
  btnForm.disabled = checkForm.checked !== true;
}

function textCount() {
  const count = 500 - text.value.length;
  counter.textContent = count;
}

btnLogin.addEventListener('click', checkCredentials);

checkForm.addEventListener('change', showBtn);

text.addEventListener('keyup', textCount);
