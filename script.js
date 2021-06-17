// const button = document.querySelector('#button');
// const nome = document.querySelector('#nome');
// const password = document.querySelector('#password');
// function validationLogin() {
//   const inputName = document.querySelector('#nome').value;
//   const inputPassword = document.querySelector('#password').value;
//   if (inputName !== 'tryber@teste.com' || inputPassword !== '123456') {
//     alert('Login ou senha inválidos.');
//   } else {
//     alert('Olá, Tryber!');
//   }
// }

document.querySelector('#button').addEventListener('click', () => {
  const inputName = document.querySelector('#nome').value;
  const inputPassword = document.querySelector('#password').value;
  if (inputName !== 'tryber@teste.com' || inputPassword !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

function enableBtnSubmit(checkAccept) {
  const submitBtn = document.getElementById('submit-btn');
  if (checkAccept.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
enableBtnSubmit();
