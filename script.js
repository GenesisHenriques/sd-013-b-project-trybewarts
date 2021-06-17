const buttonLogin = document.getElementById('btnLogin');

//  Confirms if the login and password is confirmed;
function loginConfirmation() {
  const loginId = document.getElementById('loginEmail').value;
  const passwordId = document.getElementById('loginPassword').value;
  if (loginId === 'tryber@teste.com' && passwordId === '123456') {
    alert('Olá, Tryber!');
  } else alert('Login ou senha inválidos.');
}

buttonLogin.addEventListener('click', loginConfirmation);

const buttonSubmit = document.getElementById('submit-btn');

const checkedBox = document.getElementById('agreement');

//  enable button after check the agreement box;
function submitInfo() {
  if (checkedBox.checked === true) {
    buttonSubmit.disabled = false;
  } else buttonSubmit.disabled = true;
}

checkedBox.addEventListener('click', submitInfo);
// const evaluationClass = document.querySelector('.evaluation');
// function addInput() {
//   for (let index = 1; index < 11; index += 1) {
//     const inputCreation = document.createElement('input');
//     const labelCreation = document.createElement('label');
//     labelCreation.setAttribute('for', index);
//     labelCreation.innerText = index;
//     inputCreation.setAttribute('id', ''index);
//     inputCreation.setAttribute('type', 'radio');
//     inputCreation.setAttribute('name', 'name');
//     inputCreation.innerText = index;
//     evaluationClass.appendChild(inputCreation);
//     evaluationClass.appendChild(labelCreation);
//   }
// }
// addInput();

const countLabel = document.querySelector('#counter');

const textArea = document.querySelector('textarea');

textArea.addEventListener('input', () => {
  const size = document.querySelector('textarea').maxLength;
  const numberOfCharacters = document.querySelector('textarea').value.length;
  countLabel.innerText = size - numberOfCharacters;
});
