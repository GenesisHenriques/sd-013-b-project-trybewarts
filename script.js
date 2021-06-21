const userDefault = 'tryber@test.com';
const passwordDefault = '123456';
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

counter.innerText = textarea.maxLength;

/* ________________________LOGIN________________________ */
function login() {
  const user = document.getElementsByName('user')[0].value;
  const password = document.getElementsByName('password')[0].value;

  if (user !== userDefault || password !== passwordDefault) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

const buttonEnter = document.getElementById('enter');
buttonEnter.addEventListener('click', login);

/* ________________________CONTADOR DE CARACTERES________________________ */
function count() {
  const characters = textarea.value.length;
  const maxlenght = textarea.maxLength;
  const remaining = maxlenght - characters;
  counter.innerText = remaining;
}

textarea.addEventListener('input', count);

/* ________________________ENVIAR DADOS________________________ */
let text;

function getFullName(input1, input2) {
  const fullName = document.createElement('p');
  fullName.innerText = `Nome: ${input1.value} ${input2.value}`;
  return fullName;
}

function getEmail(input) {
  const email = document.createElement('p');
  email.innerText = `Email: ${input.value}`;
  return email;
}

function getHouse(input) {
  const house = document.createElement('p');
  house.innerText = `Casa: ${input.options[input.selectedIndex].value}`;
  return house;
}

function getFamily(input) {
  for (let index = 0; index < input.length; index += 1) {
    if (input[index].checked) {
      text = `Família: ${input[index].value}`;
      return text;
    }
  }
}

function getSubjectAux(itens) {
  for (let index = 0; index < itens.length; index += 1) {
    if (itens[index + 1]) {
      text += `${itens[index]}, `;
    } else {
      text += itens[index];
    }
  }
}

function getSubject(input) {
  const itens = [];
  text = 'Matérias: ';
  for (let index = 0; index < input.length; index += 1) {
    if (input[index].checked) {
      itens.push(input[index].value);
    }
  }
  getSubjectAux(itens);

  return text;
}

function getRate(input) {
  for (let index = 0; index < input.length; index += 1) {
    if (input[index].checked) {
      text = `Avaliação: ${input[index].value}`;
      return text;
    }
  }
}

function getComments(input) {
  const comments = document.createElement('p');
  comments.innerText = `Observações: ${input.value}`;
  return comments;
}

const form = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputLastname = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const inputHouse = document.getElementById('house');
const inputFamily = document.getElementsByName('family');
const inputSubject = document.getElementsByClassName('subject');
const inputRate = document.getElementsByName('rate');
const inputComments = document.getElementById('textarea');

function showForm() {
  const rate = document.createElement('p');
  const family = document.createElement('p');
  const subject = document.createElement('p');

  rate.innerText = getRate(inputRate);
  family.innerText = getFamily(inputFamily);
  subject.innerText = getSubject(inputSubject);

  while (form.children.length > 0) {
    form.removeChild(form.firstChild);
  }
  form.appendChild(getFullName(inputName, inputLastname));
  form.appendChild(getEmail(inputEmail));
  form.appendChild(family);
  form.appendChild(getHouse(inputHouse));
  form.appendChild(subject);
  form.appendChild(rate);
  form.appendChild(getComments(inputComments));
}

const sendBtn = document.getElementById('submit-btn');
sendBtn.addEventListener('click', showForm);
