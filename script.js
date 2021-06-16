// RECONHECE O LOGIN //
function login() {
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

// CRIA SELECT PARA CASA //
function criaCasas(nome, id) {
  const select = document.querySelector('#house');
  const options = document.createElement('option');
  select.appendChild(options);
  options.id = id;
  options.innerText = nome;
}
criaCasas('Gitnória', 'gitnoria-house');
criaCasas('Reactpuff', 'reactpuff-house');
criaCasas('Corvinode', 'corvinode-house');
criaCasas('Pytherina', 'pytherina-house');