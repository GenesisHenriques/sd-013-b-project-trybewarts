const loginBtn = document.getElementById('btn-login');
const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const formField = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const inputHouse = document.getElementById('house');
const inputObservation = document.getElementById('textarea');
const counter = document.getElementById('counter');

function canLogin(event) {
  const inputLogin = document.getElementById('input-login');
  const inputPassword = document.getElementById('input-password');
  if (inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
    event.preventDefault();
  } else {
    alert('Login ou senha inválidos.');
    event.preventDefault();
  }
}

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submitBtn.disabled = 0;
  } else {
    submitBtn.disabled = 1;
  }
});

function getMatterChecked() {
  const inputMatters = document.getElementsByClassName('subject');
  const checkeds = [];
  for (let index = 0; index < inputMatters.length; index += 1) {
    if (inputMatters[index].checked === true) {
      checkeds.push(inputMatters[index].value);
    }
  }
  const matters = checkeds.join(', ');
  return matters;
}

function submitForms(event) {
  event.preventDefault();
  const inputFamily = document.querySelector('input[name="family"]:checked');
  const inputEvaluation = document.querySelector('input[name="rate"]:checked');
  const fullName = document.createElement('p');
  const fullEmail = document.createElement('p');
  const fullHouse = document.createElement('p');
  const fullFamily = document.createElement('p');
  const learnMatters = document.createElement('p');
  const evaluation = document.createElement('p');
  const obsField = document.createElement('p');
  fullName.innerHTML = `Nome: ${inputName.value} ${inputLastName.value}`;
  fullEmail.innerHTML = `Email: ${inputEmail.value}`;
  fullHouse.innerHTML = `Casa: ${inputHouse.value}`;
  fullFamily.innerHTML = `Família: ${inputFamily.value}`;
  learnMatters.innerHTML = `Matérias: ${getMatterChecked()}`;
  evaluation.innerHTML = `Avaliação: ${inputEvaluation.value}`;
  obsField.innerHTML = `Observações: ${inputObservation.value}`;
  formField.append(fullName, fullEmail, fullHouse, fullFamily, learnMatters, evaluation, obsField);
}

function getCounter(event) {
  const countString = event.target.value.length;
  console.log(countString);
  counter.innerText = 500 - countString;
}

inputObservation.addEventListener('keyup', getCounter);
submitBtn.addEventListener('click', submitForms);
loginBtn.addEventListener('click', canLogin);
