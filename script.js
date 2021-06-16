const email = document.getElementById('input-login');
const password = document.getElementById('input-senha');
const loginButton = document.getElementById('entrar');

function checkEmail() {
  for (let letter = 0; letter < email.value.length; letter += 1) {
    if (email.value[letter] === '@') {
      return true;
    }
  }
  return false;
}

function passwordCheck() {
  if (password.value !== '') {
    return true;
  }
  return false;
}

function checkLogin() {
  if (passwordCheck() === true && checkEmail() === true) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', checkLogin);
