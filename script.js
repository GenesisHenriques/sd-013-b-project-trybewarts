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
const textArea = document.querySelector('#text-area');

btnLogar.addEventListener('click', verifyLogin);

function validationComentario(event) {
  const elementoAlvo = event.target;
  const text = elementoAlvo.value;
  const larguraText = text.length;
  if (larguraText >= 500) {
    elementoAlvo.blur();
    document.getElementById('text-area').readOnly = true;
  }
}

textArea.addEventListener('keyup', validationComentario);
