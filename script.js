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

document.getElementById('submit-btn').disabled = true;

const checkbox = document.getElementById('agreement');

checkbox.addEventListener('click', (event) => {
  if (checkbox !== null) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
});
