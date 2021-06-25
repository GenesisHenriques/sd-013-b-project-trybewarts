const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const btnLogin = document.querySelector('#enviar');
const yourRate = document.querySelector('.your-rate');
const submitBtn = document.querySelector('#submit-btn');
submitBtn.disabled = true;
const agreementChk = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function verifyLogin() {
  const loginCorrect = 'tryber@teste.com';
  const passwordCorrect = '123456';
  console.log(loginInput.value);
  console.log(passwordInput.value);
  if (loginInput.value !== loginCorrect && passwordInput !== passwordCorrect) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

function generateRadiosBtn() {
  for (let index = 1; index < 11; index += 1) {
    const rate = document.createElement('input');
    const rateLabel = document.createElement('label');

    rateLabel.innerText = index;
    rate.type = 'radio';
    rate.name = 'rate';
    rate.className = 'rate';
    rate.value = index;
    if (index === 2) {
      rate.checked = true;
    }

    yourRate.appendChild(rate);
    yourRate.appendChild(rateLabel);
  }
}

function isAgreementCheck(event) {
  if (event.target.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

btnLogin.addEventListener('click', verifyLogin);
generateRadiosBtn();
agreementChk.addEventListener('click', isAgreementCheck);
textarea.addEventListener('keyup', (event) => {
  counter.innerText = (500 - event.target.textLength);
});

function getNome() {
  const inputName = document.querySelector('#input-name');
  const inputLastname = document.querySelector('#input-lastname');
  return `Nome: ${inputName.value} ${inputLastname.value}`;
}

function getEmail() {
  const inputEmail = document.querySelector('#input-email');
  return `Email: ${inputEmail.value}`;
}

function getCasa() {
  const house = document.querySelector('#house');
  return `Casa: ${house.value}`;
}

function getFamilia() {
  const family = document.querySelectorAll('.family');
  let familyText = '';
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      familyText = `Família: ${family[index].value}`;
    }
  }
  return familyText;
}

function getMaterias() {
  const techs = document.querySelectorAll('.subject');
  let techsText = 'Matérias: ';
  for (let index = 0; index < techs.length; index += 1) {
    if (techs[index].checked) {
      techsText += `${techs[index].value}, `;
    }
  }
  techsText = techsText.slice(0, -2);
  techsText += '.';
  return techsText;
}

function getAvaliacao() {
  const labelRate = document.querySelectorAll('.rate');
  let labelRateText = '';
  for (let index = 0; index < labelRate.length; index += 1) {
    if (labelRate[index].checked) {
      labelRateText = `Avaliação: ${labelRate[index].value}`;
    }
  }
  return labelRateText;
}

function getObservacoes() {
  // const textarea = document.querySelector('#textarea');
  return `Observações: ${textarea.value}`;
}

function groupDatas() {
  const evaluationForm = document.querySelector('#evaluation-form');
  evaluationForm.innerHTML = `
  ${getNome()}<br>
  ${getEmail()}<br>
  ${getCasa()}<br>
  ${getFamilia()}<br>
  ${getMaterias()}<br>
  ${getAvaliacao()}<br>
  ${getObservacoes()}<br>
  `;
}

submitBtn.addEventListener('click', () => {
  groupDatas();
});
