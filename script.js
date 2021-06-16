const login = document.getElementById('input-login');
const password = document.getElementById('input-password');
const btnLogin = document.getElementById('btn-login');

function checkCredentials() {
  // prettier-ignore
  if (login.value === 'tryber@teste.com' && password.value === '123456')alert('Olá, Tryber!');
  else alert('Login ou senha inválidos.');
}

btnLogin.addEventListener('click', checkCredentials);
