function authenticateLogin() {
  const inputEmail = document.querySelector('#login');
  const inputPassword = document.querySelector('#senha');
  const fail = 'Login ou senha inválidos.';
  const sucess = 'Olá, Tryber!';
  if (inputEmail.value !== 'tryber@teste.com' || inputPassword.value !== '123456') {
    window.alert(fail);
  } else {
    window.alert(sucess);
  }
}
const buttonLogin = document.querySelector('#buttonLogin');
buttonLogin.addEventListener('click', authenticateLogin);

function authenticateCheckboxAgreement() {
  const inputAgreement = document.querySelector('#agreement');
  const submitBtn = document.querySelector('#submit-btn');
  if (inputAgreement.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

const input = document.querySelector('#agreement');
input.addEventListener('click', authenticateCheckboxAgreement);
