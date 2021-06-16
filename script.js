// script do funcionamento do botão de entrar, do requisito 3

const entrar = document.getElementById('entrar');
const padraoLogin = 'tryber@teste.com';
const padraoSenha = '123456';

entrar.addEventListener('click', () => {
  const login = document.getElementById('input-login');
  const senha = document.getElementById('input-senha');
  if (login.value === padraoLogin && senha.value === padraoSenha) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
});
