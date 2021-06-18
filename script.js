const loginBtn = document.getElementById('btn-login');
const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function canLogin(event) {
  const inputLogin = document.getElementById('input-login');
  const inputPassword = document.getElementById('input-password');
  if (inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
    event.preventDefault();
  } else {
    alert('Login ou senha inválidos.');
    event.preventDefault();
  }
}

loginBtn.addEventListener('click', canLogin);
agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submitBtn.disabled = 0;
  } else {
    submitBtn.disabled = 1;
  }
});
