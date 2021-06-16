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
