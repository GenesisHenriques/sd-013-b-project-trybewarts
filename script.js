// RECONHECE O LOGIN //
function login() {
  const usuario = document.querySelector('#login');
  const senha = document.querySelector('#senha');
  if (usuario.innerText === 'tryber@teste.com' || senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
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
// ATIVA BOTÃO DE ENVIAR //
// const condição = document.querySelector('#agreement');
// const button = document.querySelector('#submit-btn');
// function ativaBtn(event) {
//   if (condição.checked) {
//     event.preventDefault(button);
// }
// };
// function addEvento() {
//   condição.addEventListener('checked', ativaBtn);
// }
// addEvento();
// CONTADOR
const myTextArea = document.getElementById('text-area');
const charsTest = document.getElementById('counter');
const charsMax = 500;
myTextArea.addEventListener('input', () => {
  const restante = charsMax - myTextArea.value.length;
  charsTest.textContent = `${restante} caracteres restantes`;
});
