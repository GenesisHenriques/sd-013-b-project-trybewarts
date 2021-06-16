// Login
const loginButton = document.getElementById('login-button');

function interrompeForm(event) {
  event.preventDefault();
}
loginButton.addEventListener('click', interrompeForm);

loginButton.addEventListener('click', () => {
  const login = document.getElementById('login').value;
  const pwd = document.getElementById('senha').value;
  if (login === 'tryber@teste.com' && pwd === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
});
