document.getElementById('btn-login').addEventListener('click', (e) => {
  e.preventDefault();
  const login = document.getElementById('senha-form');
  const senha = document.getElementById('login-form');

  if (login.value !== 'tryber@teste.com' || senha.value !== '123456') {
    alert('Login ou senha inválidos.');
    return;
  }
  alert('Olá, Tryber!');
});
