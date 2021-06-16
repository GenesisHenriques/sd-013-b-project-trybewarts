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
const textArea = document.querySelector('#textarea');
const object = document.getElementById('agreement');
const counter = document.querySelector('#counter');

btnLogar.addEventListener('click', verifyLogin);

function validationComentario(event) {
  const elementoAlvo = event.target;
  const text = elementoAlvo.value;
  const larguraText = text.length;
  counter.innerText = 500 - larguraText;
  if (larguraText >= 500) {
    elementoAlvo.blur();
    document.getElementById('textarea').readOnly = true;
  }
}

textArea.addEventListener('keyup', validationComentario);

function desligarButton() {
  const checked = [object.checked];
  if (checked[0] === false) {
    document.querySelector('#submit-btn').disabled = true;
  } else {
    document.querySelector('#submit-btn').disabled = false;
  }
}

object.addEventListener('click', desligarButton);

window.onload = function windowOnload() {
  desligarButton();
};
