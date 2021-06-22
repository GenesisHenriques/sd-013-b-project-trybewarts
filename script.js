const loginBtn = document.querySelector('.btn');
const submitBtn = document.querySelector('#submit-btn');
const agreementCheckBox = document.querySelector('#agreement');

function performLogin() {
  const user = document.querySelector('.username').value;
  const password = document.querySelector('.password').value;
  if (user === 'tryber@teste.com' && password === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
}

function checkUserAgreement() {
  if (!agreementCheckBox.checked) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}

loginBtn.addEventListener('click', performLogin);
agreementCheckBox.addEventListener('change', checkUserAgreement);
// comentario final antes do ultimo push
