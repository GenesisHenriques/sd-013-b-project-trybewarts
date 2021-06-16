const buttonLogin = document.getElementById('button-login');
const inputLogin = document.getElementById('user-login');
const inputSenha = document.getElementById('user-pass');

function validLogin() {
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function login() {
  buttonLogin.addEventListener('click', validLogin);
}

login();
