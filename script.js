// Login
const login = document.getElementById('login').value;
const pwd = document.getElementById('senha').value;
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
  if ((login === 'tryber@teste.com') && (pwd === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
