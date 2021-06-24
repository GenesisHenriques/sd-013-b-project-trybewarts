const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const btnLogin = document.querySelector('#enviar');
const yourRate = document.querySelector('.your-rate');
const submitBtn = document.querySelector('#submit-btn');
submitBtn.disabled = true;
const agreementChk = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
console.log(counter.innerText);

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
    rate.value = index;

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
  console.log(event.target.textLength);
});