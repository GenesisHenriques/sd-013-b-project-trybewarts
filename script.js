const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const btnLogin = document.querySelector('#btn-login');

function verifyLogin() {
  const loginCorrect = 'tryber@teste.com';
  const passwordCorrect = '123456';
  if (loginInput != loginCorrect && passwordInput != passwordCorrect) {
    alert('Login ou senha inválidos!');
  }
  else {
    alert('Olá, Tryber!');
  }
}

btnLogin.addEventListener('click', verifyLogin);
