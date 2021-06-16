const inputLogin = document.querySelector('#login');
const inputPassword = document.querySelector('#password');
const agreement = document.querySelector('#agreement');
const button = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

document.querySelector('#btn-login').addEventListener('click', () => {
  if (inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

agreement.addEventListener('change', () => {
  if (button.disabled === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
  // Aprendi sobre button.disabled, neste link
  // https://flexiple.com/disable-button-javascript/
});

function getSubjectList() {
  const subjectArray = document.querySelectorAll('input[type="checkbox"]:checked');
  let subjectList = '';
  for (let index = 0; index < subjectArray.length; index += 1) {
    if (subjectList === '') {
      subjectList = `${subjectArray[index].value}`;
    } else {
      subjectList = `${subjectList}, ${subjectArray[index].value}`;
    }
  }
  return subjectList;
}

function getDataArray(parameter1) {
  const lastName = document.getElementById('input-lastname').value;
  const myArray = [
    'Nome: ', `${document.getElementById('input-name').value} `, `${lastName}`,
    'Email: ', `${document.getElementById('input-email').value}`, '',
    'Casa: ', `${document.getElementById('house').value}`, '',
    'Família: ', `${document.querySelector('input[name="family"]:checked').value}`, '',
    'Matérias: ', `${parameter1}`, '',
    'Avaliação: ', `${document.querySelector('input[name="rate"]:checked').value}`, '',
    'Observações: ', `${document.getElementById('textarea').value}`, ''];
  return myArray;
}

function eraseAndInsert() {
  const enteredDataArea = document.getElementById('evaluation-form');
  enteredDataArea.innerHTML = '';
  const newUl = document.createElement('ul');
  newUl.className = 'entered-data-area';
  enteredDataArea.appendChild(newUl);
}

button.onclick = function () {
  const subjectListString = getSubjectList();
  const dataArray = getDataArray(subjectListString);
  eraseAndInsert();
  for (let index = 0; index < dataArray.length; index += 3) {
    const ul = document.querySelector('.entered-data-area');
    const newLi = document.createElement('li');
    newLi.innerText = `${dataArray[index]}${dataArray[index + 1]}${dataArray[index + 2]}`;
    ul.appendChild(newLi);
  }
};

textArea.addEventListener('keypress', () => {
  if (counter.innerText > 0) {
    counter.innerText = parseInt(counter.innerText, 10) - 1;
  }
});

textArea.addEventListener('keyup', () => {
  if (textArea.value === '' && counter.innerText < 500) {
    counter.innerText = '500';
  }
});

textArea.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace' && counter.innerText < 500) {
    counter.innerText = parseInt(counter.innerText, 10) + 1;
  }
});
