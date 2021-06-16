const btn = document.querySelector('#confirmar');

function verifcaLogin(login, senha) {
  if (login === 'tryber@teste.com' || senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btn.addEventListener('click', () => {
  const inputLogin = document.querySelector('#textLogin').value;
  const inputPassword = document.querySelector('#textSenha').value;
  verifcaLogin(inputLogin, inputPassword);
});
