const buttonLogin = document.getElementById('btnLogin');

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
