const submit = document.getElementById('botao');

function alertaInvalido() {
  const nome = document.getElementById('login-tw').value;
  const senha = document.getElementById('senha-tw').value;
  const compare = nome.indexOf('@');
  const erro = 'Login ou senha inválidos.';

  if (compare === -1) {
    alert(erro);
  } else if (senha === '') {
    alert(erro);
  } else if (nome.length < 3) {
    alert(erro);
  } else {
    alert('Olá, Tryber!');
  }
}

submit.addEventListener('click', alertaInvalido);

const button = document.getElementById('submit-btn');

function checkButton() {
  button.disabled = true;
  return button;
}

window.onload = checkButton();

const checkbox = document.getElementById('agreement');

function checar() {
  if (checkbox.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

checkbox.addEventListener('click', checar);

/* Req 20 */

const contador = document.getElementById('counter');
const textarea = document.getElementById('textarea');
textarea.addEventListener('keyup', () => {
  const max = 500;
  const cont = textarea.value.length;
  const resta = max - cont;
  contador.innerText = resta;
});

const form = document.getElementById('evaluation-form');

button.addEventListener('click', (event) => {
  form.style.display = 'none';
  event.preventDefault();
});
