const btn = document.querySelector('#confirmar');

function verifcaLogin(login, senha) {
  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá Tryber!');
  } else {
    alert('Login ou senha Invalidos');
  }
}

btn.addEventListener('click', () => {
  const inputLogin = document.querySelector('#textLgoin').value;
  console.log(inputLogin);
  const inputPassword = document.querySelector('#textsenha').value;
  console.log(inputPassword);
  verifcaLogin(inputLogin, inputPassword);
});
