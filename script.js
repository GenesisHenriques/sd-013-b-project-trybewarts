const button = document.querySelector('.logar');

button.addEventListener('click', () => {
  const senha = document.querySelector('.senha').value;
  const email = document.querySelector('.email').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
});
