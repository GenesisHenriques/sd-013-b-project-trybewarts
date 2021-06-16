//  Realiza autenticação de login
function verifyLogin() {
  const login = document.getElementsByName('login')[0].value;
  const password = document.getElementsByName('password')[0].value;

  const validCredentials = {
    login: 'tryber@teste.com', password: '123456',
  };

  let loginVerified = false;
  let passwordVerified = false;

  //  Valida o login
  if (login === validCredentials.login) {
    loginVerified = true;
  }
  if (password === validCredentials.password) {
    passwordVerified = true;
  }

  //  Mostra a validação ao usuário
  if (loginVerified && passwordVerified) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const btnLogar = document.querySelector('#btn-login');

btnLogar.addEventListener('click', verifyLogin);
