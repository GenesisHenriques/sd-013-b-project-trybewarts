const email = document.querySelector('#input-login-email');
const password = document.querySelector('#input-login-password');
const loginButton = document.querySelector('#loginButton');
const rateContainer = document.querySelector('#rate-container');

function login() {
  const validEmail = email.value;
  const validPassword = password.value;
  if (validEmail === 'tryber@teste.com' && validPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', login);

function createRateRadios() {
  const rates = 10;
  for (let index = 1; index <= rates; index += 1) {
    const radioRate = document.createElement('input');
    const labelRate = document.createElement('label');
    radioRate.type = 'radio';
    radioRate.name = 'rate';
    radioRate.value = index;
    labelRate.innerText = index;
    rateContainer.appendChild(radioRate);
    rateContainer.appendChild(labelRate);
  }
}

createRateRadios();
