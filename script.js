let email = document.getElementById('input-login');
let password = document.getElementById('input-senha');
const loginButton = document.getElementById('entrar');

function checkEmail() {
  for (letter of email.value) {
    if (letter === '@'){
      return true;
    }
  }
  return false;
}

function passwordCheck() {
  if (password.value !== ''){
    
    return true;
    
  }
  return false;
}

function checkLogin() {
  if (passwordCheck() === true && checkEmail() === true ){
    alert('Olá, Tryber!');
  }
  else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', checkLogin);
