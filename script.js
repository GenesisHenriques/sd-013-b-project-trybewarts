const button = document.querySelector('#button');
const nome = document.querySelector('#nome');
const password = document.querySelector('#password');
const btnAgreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
const limite = 500;
function validationLogin() {
  const inputName = nome.value;
  const inputPassword = password.value;
  if (inputName !== 'tryber@teste.com' || inputPassword !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

button.addEventListener('click', validationLogin);

function validationCheck() {
  if (btnAgreement.checked === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
btnAgreement.addEventListener('click', validationCheck);
/** Source: https://pt.stackoverflow.com/questions/113089/contador-de-caracteres-digitados-em-um-textarea */
function contar() {
  const qtdcaracter = this.value.length;
  const restantes = limite - qtdcaracter;
  if (restantes < 1) {
    this.value = this.value.slice(0, limite);
  }
  counter.innerHTML = restantes;
}

textArea.addEventListener('keyup', contar);
