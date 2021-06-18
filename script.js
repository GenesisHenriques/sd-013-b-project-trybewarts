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

/* const checkbox = document.getElementById('agreement');
let result = '';

function checar(aleatory){
  if(checkbox. checked){
    result = 'checado';
  }
}

checkbox.addEventListener('click', checar);

const button = document.getElementById('submit-btn');

function previne(event){
  if(result === 'checado'){
    console.log('enviado');
  } else {
    event.preventDefault();
  }
}

button.addEventListener('click', previne); */

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
  }
}

checkbox.addEventListener('click', checar);
