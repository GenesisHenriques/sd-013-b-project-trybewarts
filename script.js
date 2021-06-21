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
function getInformation(event) {
  event.preventDefault();
  const formMain = document.getElementById('evaluation-form');
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const email = document.getElementById('input-email');
  const casa = document.getElementById('house');
  const familia = document.getElementsByClassName('family');
  let checkedValue = null;
  for (const key in familia) {
    if (familia[key].checked) {
      checkedValue = familia[key].value;
    }
  }
  const subject = document.getElementsByClassName('subject');
  let subjectChecked = '';
  // subject.addEventListener('click',selectSubjects);
  function selectSubjects() {
    for (const key in subject) {
      if (subject[key].checked) {
        subjectChecked += `${subject[key].value}, `;
      }
    }
  }
  selectSubjects();
  const rate = document.getElementsByClassName('rate');
  let rateChecked = null;
  for (const key in rate) {
    if (rate[key].checked) {
      rateChecked = rate[key].value;
    }
  }
  formMain.innerHTML = '';
  const information = document.createElement('p');
  information.innerText = `Nome: ${name.value} ${lastName.value}
  Email: ${email.value}
  Casa: ${casa.value}
  Família: ${checkedValue}
  Matérias: ${subjectChecked}
  Avaliação: ${rateChecked}
  Observações: ${textArea.value}`;
  formMain.appendChild(information);
}
button.addEventListener('click', getInformation);
