const button = document.querySelector('.logar');

button.addEventListener('click', () => {
  const senha = document.querySelector('.senha').value;
  const email = document.querySelector('.email').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
});

const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', () => {
  const checkBox = document.getElementById('agreement');
  if (checkBox.checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
});

// let checker = document.getElementById('agreement');
// let sendbtn = document.getElementById('submit-btn');
// checker.onchange = function () {
//   if (sendbtn.disabled === true) {
//     sendbtn.disabled = this.checked;
//   } else {
//     sendbtn.disabled = !!this.checked;
//   }
// };

// function createInput() {
//   const pixelBoard = document.querySelector('#pixel-board');

//   for (let i = 0; i < 5; i += 1) {
//     for (let j = 0; j < 5; j += 1) {
//       const pixel = document.createElement('div');
//       pixel.className = 'pixel';

//       pixelBoard.appendChild(pixel);
//     }
//   }
// }
