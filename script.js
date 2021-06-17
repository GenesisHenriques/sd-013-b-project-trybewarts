// Ínicio de Trecho de Código do Genesis
function validatingLogin() {
  const login = document.getElementById('login');
  const password = document.getElementById('password');

  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function setPreventDefault(event) {
  event.preventDefault();
  validatingLogin();
}

document.getElementById('btnLogin').addEventListener('click', setPreventDefault);

// -----Requisito 20-------
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function counterCaracter() {
  counter.innerText = `Caracteres Disponívei: ${500 - textArea.value.length}`;
}

textArea.addEventListener('input', counterCaracter);

//-----Requisito 21-------
function removeAdd(idFather, idChild) {
  const father = document.getElementsByClassName(idFather)[0];
  const child = document.getElementById(idChild);
   
  let text = document.createElement('p');
  text.innerText = child.value;
  father.appendChild(text);

  father.removeChild(child);
}

function genesis() {
  removeAdd('personal-info-div', 'input-name');
  removeAdd('personal-info-div', 'input-lastname');
  removeAdd('body', 'input-email');
  removeAdd('body', 'house');
  removeAdd('family-radio-btn', 'house');
}







// Fim de Trecho de Código do Genesis

// Inicio de Trecho de código do Alan
function generateRateButtons() {
  const rateDiv = document.getElementsByClassName('rate-div');
  for (let index = 1; index < 11; index += 1) {
    const radioBtn = document.createElement('input');
    const radioBtnLabel = document.createElement('label');
    radioBtn.setAttribute('type', 'radio');
    radioBtn.setAttribute('name', 'rate');
    radioBtn.setAttribute('value', index);
    radioBtn.setAttribute('id', index);
    radioBtnLabel.setAttribute('for', index);
    radioBtnLabel.innerText = index;
    rateDiv[0].appendChild(radioBtn);
    rateDiv[0].appendChild(radioBtnLabel);
  }
}

generateRateButtons();

const agreementCheckBox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function checkAgreement() {
  if (agreementCheckBox.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

checkAgreement();
agreementCheckBox.addEventListener('click', checkAgreement);
// Fim de Trecho de Código do Alan
