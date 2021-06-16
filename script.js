function login () {
  const usuario = document.querySelector('#login');
  const senha = document.querySelector('#senha');
  if (usuario.innerText === 'tryber@teste.com' || senha.value === '123456') {
    alert('Olá Tryber!');
  } else {
    alert('Usuário e senha inválidos!');
  }
}
const bntEntrar = document.querySelector('#btn-entrar');
bntEntrar.addEventListener('click', login);