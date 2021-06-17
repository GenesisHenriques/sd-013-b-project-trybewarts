const userInput = document.getElementById('login-user');
const passInput = document.getElementById('login-pass');
const confirmButton = document.getElementById('login-button');

confirmButton.onclick = function pegarLogin() {
  const confirmUser = userInput.value;
  const confirmPass = passInput.value;
  if (confirmUser === 'tryber@teste.com' && confirmPass === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
};
