//  Realiza autenticação de login
function verifyLogin() {
  const login = document.getElementsByName('login')[0].value;
  const password = document.getElementsByName('password')[0].value;
  const validCredentials = { login: 'tryber@teste.com', password: '123456' };

  const credentialsValidated = [false, false];

  //  Valida o login e mostra a validação em seguida
  if (login === validCredentials.login) {
    credentialsValidated[0] = true;
  }
  if (password === validCredentials.password) {
    credentialsValidated[1] = true;
  }
  if (credentialsValidated[0] && credentialsValidated[1]) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const btnLogar = document.querySelector('#btn-login');

btnLogar.addEventListener('click', verifyLogin);
