const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const btnLogin = document.querySelector('#enviar');

function verifyLogin() {
  const loginCorrect = 'tryber@teste.com';
  const passwordCorrect = '123456';
  console.log(loginInput.value);
  console.log(passwordInput.value);
  if (loginInput.value != loginCorrect && passwordInput != passwordCorrect) {
    alert('Login ou senha inválidos!');
  }
  else {
    alert('Olá, Tryber!');
  }
}

btnLogin.addEventListener('click', verifyLogin);
