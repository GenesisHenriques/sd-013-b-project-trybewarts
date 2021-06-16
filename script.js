const button = document.querySelector('.submit');

function loginAlert() {
  const loginInput = document.querySelector('.login');
  const passwordInput = document.querySelector('.password');

  if (loginInput.value === '' && passwordInput.value === '') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

button.addEventListener('click', loginAlert);

const checkbox = document.getElementById('agreement');

const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;
checkbox.addEventListener('click', () => {
  if (checkbox !== null) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
