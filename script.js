const button = document.querySelector('#button');
const nome = document.querySelector('#nome');
const password = document.querySelector('#password');
const btnAgreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
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
