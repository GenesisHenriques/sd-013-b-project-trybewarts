// botão de entrada, inputs de login e senha

const login = document.querySelector('.botao-login');

login.addEventListener('click', () => {
  if (document.getElementById('login').value !== 'tryber@teste.com'
  || document.getElementById('senha').value !== '123456') {
    window.alert('Login ou senha inválidos.');
  } else {
    window.alert('Olá, Tryber!');
  }
});
