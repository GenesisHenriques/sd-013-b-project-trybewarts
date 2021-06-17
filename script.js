const userEmail = document.querySelector('#user-email');
const userPass = document.querySelector('#input-pass');
const buttonLogin = document.querySelector('#input-login');
const submit = document.querySelector('#submit-btn');
const checkButton = document.querySelector('#agreement');

function validLogin() {
  if (userEmail.value !== 'tryber@teste.com') {
    return false;
  }
  if (userPass.value !== '123456') {
    return false;
  }
  return true;
}

buttonLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (validLogin()) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

buttonLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (validLogin()) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
function checkedin() {
  const check = checkButton.checked;
  const btn = submit;
  if (check === true) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
checkButton.addEventListener('click', checkedin);
