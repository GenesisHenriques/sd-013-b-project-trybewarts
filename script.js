function logging() {
  const senha = document.querySelector('.senha').value;
  const email = document.querySelector('.email').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
}
});

function releasingSubmitButton() {
  const checkBox = document.getElementById('agreement');
  const submitButton = document.getElementById('submit-btn');
  if (checkBox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

const agreement = document.querySelector('#agreement');
agreement.addEventListener('click', releasingSubmitButton);
const button = document.querySelector('.logar');
button.addEventListener('click', logging);

// function createInput() {
//   const pixelBoard = document.querySelector('#pixel-board');

//   for (let i = 0; i < 5; i += 1) {
//     for (let j = 0; j < 5; j += 1) {
//       const pixel = document.createElement('div');
//       pixel.className = 'pixel';

const agreement = document.querySelector('#agreement');
agreement.addEventListener('click', releasingSubmitButton);
