const inputLogin = document.querySelector('#login');
const inputPassword = document.querySelector('#password');
const agreement = document.querySelector('#agreement');
const button = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

document.querySelector('#btn-login').addEventListener('click', () => {
  if (inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

agreement.addEventListener('change', () => {
  if (button.disabled === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
  // Aprendi sobre button.disabled, neste link
  // https://flexiple.com/disable-button-javascript/
});

textArea.addEventListener('keypress', () => {
  if (counter.innerText > 0) {
    counter.innerText = parseInt(counter.innerText, 10) - 1;
  }
});

textArea.addEventListener('keyup', () => {
  if (textArea.value === '' && counter.innerText < 500) {
    counter.innerText = '500';
  }
});

textArea.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace' && counter.innerText < 500) {
    counter.innerText = parseInt(counter.innerText, 10) + 1;
  }
});
