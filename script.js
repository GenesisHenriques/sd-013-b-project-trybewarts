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
  counter.innerText = `Caracteres Disponíveis: ${500 - textArea.value.length}`;
}

textArea.addEventListener('input', counterCaracter);

// -----Requisito 21-------
function removeAddName() {
  const father = document.getElementsByClassName('personal-info-div')[0];
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');

  const text = document.createElement('p');
  text.innerText = `Nome: ${name.value} ${lastName.value}`;
  father.appendChild(text);

  father.removeChild(name);
  father.removeChild(lastName);
}

function removeAddEmail() {
  const father = document.getElementsByClassName('email-and-house-div')[0];
  const email = document.getElementById('input-email');

  const text = document.createElement('p');
  text.innerText = `Email: ${email.value}`;
  father.appendChild(text);

  father.removeChild(email);
}

function removeAddHouse() {
  const father = document.getElementsByClassName('email-and-house-div')[0];
  const house = document.getElementById('house');
  const labelHouse = document.getElementById('labelHouse');

  const text = document.createElement('p');
  text.innerText = `Casa: ${house.value}`;
  father.appendChild(text);

  father.removeChild(house);
  father.removeChild(labelHouse);
}

function removeAddFamily() {
  const father = document.getElementsByClassName('family-div')[0];
  const children = document.querySelectorAll('.family-radio-btn');
  const label = document.getElementById('label-family');
  let family = '';
  if (document.getElementById('familyUm').checked === true) {
    family = document.getElementById('familyUm');
  } else if (document.getElementById('familyDois').checked === true) {
    family = document.getElementById('familyDois');
  } else if (document.getElementById('familyTres').checked === true) {
    family = document.getElementById('familyTres');
  }
  const text = document.createElement('p');
  text.innerText = `Família: ${family.value}`;
  father.appendChild(text);
  for (let index = children.length - 1; index >= 0; index -= 1) {
    children[index].remove();
  }
  father.removeChild(label);
}

function removeAddContent() {
  const subject = document.getElementsByClassName('subject');
  const father = document.getElementsByClassName('content-div')[0];
  let itens = '';

  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked === true) {
      itens += `${subject[index].value}, `;
    }
  }

  const item = document.createElement('p');
  item.innerText = `Matérias: ${itens}`;
  father.appendChild(item);

  father.removeChild(document.getElementById('label-content'));
  father.removeChild(document.getElementsByClassName('checkbox-div')[0]);
}

function removeAddNote() {
  const grades = document.querySelectorAll('.note');
  const noteLabel = document.querySelectorAll('.noteLabel');
  const father = document.getElementsByClassName('rate-div')[0];

  const item = document.createElement('p');

  for (let index = 0; index < grades.length; index += 1) {
    if (grades[index].checked) {
      item.innerText = `Avaliação: ${grades[index].value}`;
      father.appendChild(item);
    }
  }

  document.getElementById('label-rate').remove();
  for (let index = grades.length - 1; index >= 0; index -= 1) {
    grades[index].remove();
    noteLabel[index].remove();
  }
}

function removeAddText() {
  const text = document.getElementById('textarea');
  const father = document.getElementsByClassName('textarea-div')[0];

  const item = document.createElement('p');
  item.innerText = `Observações: ${text.value}`;
  father.appendChild(item);

  document.getElementsByClassName('textarea')[0].remove();
  document.getElementById('counter').remove();
  text.remove();
}

function validation() {
  removeAddName();
  removeAddEmail();
  removeAddHouse();
  removeAddFamily();
  removeAddContent();
  removeAddNote();
  removeAddText();
}

document.getElementById('submit-btn').addEventListener('click', validation);
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
    radioBtn.setAttribute('class', 'note');
    radioBtnLabel.setAttribute('for', index);
    radioBtnLabel.innerText = index;
    radioBtnLabel.classList = 'noteLabel';
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
