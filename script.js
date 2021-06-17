function checkLogin(event) {
  event.preventDefault();
  const inputLogin = document.getElementById('login').value;
  const inputPassword = document.getElementById('password').value;

  if (inputLogin === 'tryber@teste.com' && inputPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }

  console.log(typeof inputLogin, typeof inputPassword);
}

function verifyAgreement() {
  const buttonSubmit = document.getElementById('submit-btn');

  if (buttonSubmit.disabled) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}

window.onload = () => {
  const buttonLogin = document.getElementById('buttonLogin');
  const checkboxAgreement = document.getElementById('agreement');

  buttonLogin.addEventListener('click', checkLogin);
  checkboxAgreement.addEventListener('change', verifyAgreement);
};
