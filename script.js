function login(event) {
  event.preventDefault();
  const email = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  if (email !== 'tryber@teste.com' || senha !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

function eventLogin() {
  const button = document.getElementById('button');
  button.addEventListener('click', login);
}
eventLogin();
