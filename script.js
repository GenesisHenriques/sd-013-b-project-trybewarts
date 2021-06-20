const nome = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.querySelectorAll('.radio-family');
const content = document.querySelectorAll('.subject');
const rate = document.querySelectorAll('.radio-rate');
const textarea = document.getElementById('textarea');

document.querySelector('.login').addEventListener('click', (e) => {
  e.preventDefault();
  const inputLogin = document.getElementById('login').value;
  const inputSenha = document.getElementById('senha').value;
  return inputLogin !== 'tryber@teste.com' || inputSenha !== '123456'
    ? alert('Login ou senha inválidos.')
    : alert('Olá, Tryber!');
});

document.getElementById('agreement').addEventListener('click', () => {
  const check = document.getElementById('agreement');
  const button = document.getElementById('submit-btn');
  if (check.value === 'false') {
    button.removeAttribute('disabled');
    check.value = 'true';
  } else {
    button.disabled = true;
    check.value = 'false';
  }
});

document.getElementById('textarea').addEventListener('keyup', (event) => {
  const counter = document.getElementById('counter');
  counter.innerText = 500 - event.target.value.length;
});

function getFullName(nameElement, lastNameElement, textTitle) {
  const pAnswer = document.createElement('p');
  pAnswer.innerText = `${textTitle}: ${nameElement.value} ${lastNameElement.value}`;
  return pAnswer;
}

function getELement(element, textTitle) {
  const pAnswer = document.createElement('p');
  pAnswer.innerText = `${textTitle}: ${element.value}`;
  return pAnswer;
}

function getElementsRadio(elements, textTitle) {
  for (let index = 0; index < elements.length; index += 1) {
    if (elements[index].type === 'radio' && elements[index].checked) {
      return getELement(elements[index], textTitle);
    }
  }
}

function getElementsCheckbox(elements, textTitle) {
  const valorP = [];
  const pAnswer = document.createElement('p');
  for (let index = 0; index < elements.length; index += 1) {
    if (elements[index].type === 'checkbox' && elements[index].checked) {
      valorP.push(` ${elements[index].value}`);
    }
  }pAnswer.innerText = `${textTitle}: ${valorP}`;
  return pAnswer;
}

document.getElementById('submit-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const divAnswer = document.createElement('div');
  const form = document.getElementById('evaluation-form');
  divAnswer.appendChild(getFullName(nome, lastName, 'Nome'));
  divAnswer.appendChild(getELement(email, 'Email'));
  divAnswer.appendChild(getELement(house, 'Casa'));
  divAnswer.appendChild(getElementsRadio(family, 'Família'));
  divAnswer.appendChild(getElementsCheckbox(content, 'Matérias'));
  divAnswer.appendChild(getElementsRadio(rate, 'Avaliação'));
  divAnswer.appendChild(getELement(textarea, 'Observações'));
  form.innerHTML = '';
  form.appendChild(divAnswer);
});
