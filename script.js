const buttonlogin = document.getElementById('button');

function login(event) {
  const inputLogin = document.getElementById('Login');
  const inputPassword = document.getElementById('Senha');
  if (inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
    event.preventDefault();
  } else {
    alert('Login ou senha inválidos.');
    event.preventDefault();
  }
}

buttonlogin.addEventListener('click', login);