const botao = document.querySelector('#botao');
botao.addEventListener('click', () => {
  const inputLogin = document.querySelector('#login').value;
  const inputSenha = document.querySelector('#senha').value;
  if (inputLogin === 'tryber@teste.com' && inputSenha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
});
