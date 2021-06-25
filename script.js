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

function setLocalStorage() {
  // localStorage.setItem('datas', JSON.stringify(arrayItens));
  console.log('a');
  localStorage.setItem('datas', 'oi');
}

btnLogin.addEventListener('click', verifyLogin);
generateRadiosBtn();
agreementChk.addEventListener('click', isAgreementCheck);
textarea.addEventListener('keyup', (event) => {
  counter.innerText = (500 - event.target.textLength);
});

function groupDatas() {
  const inputName = document.querySelector('#input-name');
  const inputLastname = document.querySelector('#input-lastname');
  const fullNameText = `Nome: ${inputName.value} ${inputLastname.value}`;
  
  const inputEmail = document.querySelector('#input-email');
  const inputEmailText = `Email: ${inputEmail.value}`;

  const house = document.querySelector('#house');
  const houseText = `Casa: ${house.value}`;

  const family = document.querySelectorAll('.family');
  let familyText = '';
  for (let key of family) {
    if (key.checked) {
      familyText = `Família: ${key.value}`;
    }
  }

  const techs = document.querySelectorAll('.subject');
  let techsText = 'Matérias: ';
  for (let key of techs) {
    if (key.checked) {
      techsText += `${key.value}, `;
    }
  }
  techsText = techsText.slice(0, -2);
  techsText += '.';

  const labelRate = document.querySelectorAll('.rate');
  let labelRateText = '';
  for (let key of labelRate) {
    if (key.checked) {
      labelRateText = `Avaliação: ${key.value}`;
    }
  }

  // const textarea = document.querySelector('#textarea');
  const textareaText = `Observações: ${textarea.value}`;

  const evaluationForm = document.querySelector('#evaluation-form');
  evaluationForm.innerHTML = `
  ${fullNameText}<br>
  ${inputEmailText}<br>
  ${houseText}<br>
  ${familyText}<br>
  ${techsText}<br>
  ${labelRateText}<br>
  ${textareaText}<br>
  `;
}

submitBtn.addEventListener('click', (event) => {
  groupDatas();
});
