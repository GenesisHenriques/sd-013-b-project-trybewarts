const loginInput = document.getElementById('input_login');
const passwordInput = document.getElementById('input_senha');
const loginButton = document.getElementById('btn_logar');

loginButton.addEventListener('click', () => {
  if (loginInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
