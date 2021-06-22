function checkLogin() {
  const login = document.querySelector('.Login');
  const password = document.querySelector('.Password');
  const correctLogin = 'tryber@teste.com';
  const correctPassword = '123456';
  if (login.value === correctLogin && password.value === correctPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
const loginButton = document.querySelector('.Enter');
loginButton.addEventListener('click', checkLogin);
const checkButton = document.getElementById('agreement');
function addSubmitButton() {
  const submitButton = document.getElementById('submit-btn');
  submitButton.removeAttribute('disabled');
}
checkButton.addEventListener('click', addSubmitButton);

const textArea = document.getElementById('textarea');
function countChar() {
  const coutChar = textArea.value.length;
  const available = 500 - coutChar;
  document.getElementById('counter').innerText = available;
}
textArea.addEventListener('keyup', countChar);
const button = document.getElementById('submit-btn');

const formMain = document.getElementById('evaluation-form');
function getFullName() {
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  return `Nome: ${name.value} ${lastName.value}`;
}

function getEmail() {
  const email = document.getElementById('input-email');
  return `Email: ${email.value}`;
}

function getHouse() {
  const casa = document.getElementById('house');
  return `Casa: ${casa.value}`;
}

function getFamily() {
  const familia = document.querySelectorAll('.family');
  let checkedValue = null;
  familia.forEach((fam) => {
    if (fam.checked) {
      checkedValue = fam.value;
    }
  });
  return `Família: ${checkedValue}`;
}
function getSubjects() {
  const subjects = document.querySelectorAll('.subject');
  let subjectsChecked = '';
  function selectSubjects() {
    subjects.forEach((subject) => {
      if (subject.checked) {
        subjectsChecked += `${subject.value}, `;
      }
    });
  }
  selectSubjects();
  return `Matérias: ${subjectsChecked}`;
}

function getRate() {
  const rate = document.querySelectorAll('.rate');
  let rateChecked = null;
  rate.forEach((rateCheck) => {
    if (rateCheck.checked) {
      rateChecked = rateCheck.value;
    }
  });
  return `Avaliação: ${rateChecked}`;
}
function getInformation(event) {
  event.preventDefault();
  const fullName = getFullName();
  const email = getEmail();
  const house = getHouse();
  const family = getFamily();
  const subjects = getSubjects();
  const rate = getRate();
  formMain.innerHTML = '';
  const information = document.createElement('p');
  information.id = 'information';
  information.innerText = `${fullName}
  ${email}
  ${house}
  ${family}
  ${subjects}
  ${rate}
  Observações: ${textArea.value}`;
  formMain.appendChild(information);
}
button.addEventListener('click', getInformation);
