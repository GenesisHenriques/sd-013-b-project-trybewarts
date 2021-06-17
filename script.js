const btn = document.querySelector('#confirmar');
const checkBox = document.querySelector('#agreement');
const btnTermos = document.querySelector('#submit-btn');
const submitButton = document.getElementById('submit-btn');

function verifcaCheck() {
  if (checkBox.value === 'sim') {
    btnTermos.disabled = false;
    checkBox.value = 'nao';
  } else {
    btnTermos.disabled = true;
    checkBox.value = 'sim';
  }
}

checkBox.addEventListener('click', () => {
  verifcaCheck();
});

function verifcaLogin(login, senha) {
  if (login === 'tryber@teste.com' || senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btn.addEventListener('click', () => {
  const inputLogin = document.querySelector('#textLogin').value;
  const inputPassword = document.querySelector('#textSenha').value;
  verifcaLogin(inputLogin, inputPassword);
});

const getFirstName = () => document.getElementById('input-name').value;
const getLastName = () => document.getElementById('input-lastname').value;
const getEmail = () => document.getElementById('input-email').value;
const getHouse = () => document.getElementById('house').value;
const getFamily = () => document.querySelector('input[name="family"]:checked').value;
const getRate = () => document.querySelector('input[name="rate"]:checked').value;
const getComments = () => document.getElementById('textarea').value;

function getSubjects() {
  let subjects = '';
  const list = document.querySelectorAll('input[type="checkbox"]:checked');

  subjects = list[0].value;
  for (let index = 1; index < list.length - 1; index += 1) {
    subjects += `, ${list[index].value}`;
  }

  return subjects;
}

function setInformation(information, textInformation) {
  const element = document.createElement('p');
  element.innerHTML = `${information}: ${textInformation}`;

  return element;
}

function getInformations() {
  const informations = {
    name: setInformation('Nome', `${getFirstName()} ${getLastName()}`),
    email: setInformation('Email', getEmail()),
    house: setInformation('Casa', getHouse()),
    family: setInformation('Família', getFamily()),
    subjects: setInformation('Matérias', getSubjects()),
    rate: setInformation('Avaliação', getRate()),
    comment: setInformation('Observações', getComments()),
  };

  return informations;
}

function createInformation() {
  const informations = getInformations();
  const form = document.getElementById('evaluation-form');

  form.innerHTML = '';

  form.appendChild(informations.name);
  form.appendChild(informations.email);
  form.appendChild(informations.house);
  form.appendChild(informations.family);
  form.appendChild(informations.subjects);
  form.appendChild(informations.rate);
  form.appendChild(informations.comment);
}

submitButton.addEventListener('click', createInformation);
