document.querySelector('.login').addEventListener('click', () => {
  const inputLogin = document.getElementById('login').value;
  const inputSenha = document.getElementById('senha').value;

  return inputLogin !== 'tryber@teste.com' || inputSenha !== '123456'
    ? alert('Login ou senha inválidos.')
    : alert('Olá, Tryber!');
});
