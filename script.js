const cadastros = {
  user: 'tryber@teste.com',
  pass: '123456'
}
const bntLogin = document.getElementById('bntLogin');
bntLogin.addEventListener('click',validarLogin);

function validarLogin() {
  let login = document.getElementById('login').value;
  let senha = document.getElementById('senha').value;

  if ((cadastros.user === login) && (cadastros.pass === senha)) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
