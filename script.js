// Requesito 3 - autenticando formulario e seus inputs
const inputLogin = document.getElementById('input-login');
const inputSenha = document.getElementById('input-senha');
const botaoEntrar = document.getElementById('button-entrar');

function login() {
  if (inputLogin.value !== 'tryber@teste.com' && inputSenha.value !== '123456') {
      alert('Login ou senha inválidos.')
  }
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
      alert('Olá, Tryber!')
  }
}
botaoEntrar.addEventListener('click', login);
