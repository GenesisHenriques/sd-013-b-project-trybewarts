const buttonLogin = document.getElementById('login-btn');

function checkLogin(event) {
  const email = document.getElementById('input-email-login');
  const senha = document.getElementById('input-senha');

  event.preventDefault();

  if (email.value !== 'tryber@teste.com' || senha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

buttonLogin.addEventListener('click', checkLogin);

const agreementCheckBox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function checkAgreement() {
  if (agreementCheckBox.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

checkAgreement();
agreementCheckBox.addEventListener('click', checkAgreement);
