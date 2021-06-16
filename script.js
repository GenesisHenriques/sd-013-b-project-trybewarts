const loginButton = document.getElementById('login-button');
const login = document.getElementById('login');
const senha = document.getElementById('senha');

function entrar() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', entrar);

const check = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function enableBtn() {
  if (check.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

check.addEventListener('click', enableBtn);
