const loginInput = document.getElementById('input_login');
const passwordInput = document.getElementById('input_senha');
const loginButton = document.getElementById('btn_logar');
const agreementCheck = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

loginButton.addEventListener('click', () => {
  if (loginInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

window.onload = () => {
  if (!agreementCheck.checked) {
    submitButton.disabled = true;
  }
};

agreementCheck.addEventListener('click', () => {
  if (agreementCheck.checked) {
    submitButton.disabled = false;
  }
});

// document.getElementById('textarea').addEventListener('keyup', () => {
//   const characterCount = document(this).val().length;
//   const current = document.getElementById('current');
//   const maximum = document.getElementById('maximum');
//   const TheCount = document.getElementById('counter');

//   current.text(characterCount);
//   current.text(maximum);
//   current.text(TheCount);
// });
