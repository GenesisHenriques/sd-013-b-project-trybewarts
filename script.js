const loginButton = document.getElementById('login-button');
const login = document.getElementById('login');
const senha = document.getElementById('senha');

loginButton.addEventListener('click', () => {
  const loginPadrao = 'tryber@teste.com';
  const senhaPadrao = '123456';
  if (login.value === loginPadrao && senha.value === senhaPadrao) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
