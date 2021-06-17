// Botão de login
const loginButton = document.getElementById('login-button');

function checkUser() {
  const userLogin = document.getElementById('user-login');
  const userPassword = document.getElementById('user-password');
  const user = userLogin.value;
  const password = userPassword.value;
  const email = 'tryber@teste.com';
  const senha = '123456';
  if (user === email && password === senha) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', checkUser);

// Adiciona condicional da Checkbox
const checkbox = document.getElementById('agreement');
const sendButton = document.getElementById('submit-btn');


checkbox.addEventListener('change', enableButton);

function enableButton () {
  if (sendButton.disabled === true) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}