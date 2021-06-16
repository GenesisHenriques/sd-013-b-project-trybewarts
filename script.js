// Validar acesso do login

const login = document.getElementById('login-input');
const password = document.getElementById('password-input');
const enterButton = document.getElementById('enter-button');

function checkLogin() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

enterButton.addEventListener('click', checkLogin);
