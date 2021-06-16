const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const btnLogin = document.querySelector('#enviar');
const yourRate = document.querySelector('.your-rate');

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
    // rateLabel.for = `${index}`;
    // console.log(rateLabel);
    rate.type = 'radio';
    rate.name = 'rate';
    rate.value = index;
    yourRate.appendChild(rate);
    yourRate.appendChild(rateLabel);
  }
}
// Posicione os radio buttons para ficar lado a lado
// Posicione os radio buttons à direita da label

btnLogin.addEventListener('click', verifyLogin);
generateRadiosBtn();
