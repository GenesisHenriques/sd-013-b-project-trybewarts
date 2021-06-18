const loginButton = document.getElementById('login-button');
const login = document.getElementById('login');
const password = document.getElementById('password');
loginButton.addEventListener('click', () => {
  if (login.value !== 'tryber@teste.com' && password.value !== 123456) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
