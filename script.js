//  Realiza autenticação de login
function verifyLogin() {
  let login = document.getElementsByName('login')[0].value;
  let password = document.getElementsByName('password')[0].value;

  let validCredentials = {login: 'tryber@teste.com',
  password: '123456'};

  let loginVerified = false;
  let passwordVerified = false;

  //  Valida o login
  if(login === validCredentials.login) {
    loginVerified = true;
  }
  if(password === validCredentials.password) {
    passwordVerified = true;
  }

  //  Mostra a validação ao usuário
  if (loginVerified && passwordVerified){
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}