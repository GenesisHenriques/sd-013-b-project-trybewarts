const defaultLogin = 'trybe@teste.com';
const defaultPassword = '123456';

const login = document.getElementById('login');
const password = document.getElementById('password');

const btnLogin = document.getElementById('btn-login');

function validadeLogin() {
  if ((login.value === defaultLogin) || (password.value === defaultPassword)) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou Senha Inválidos!');
  }
}

btnLogin.addEventListener('click', validadeLogin);
