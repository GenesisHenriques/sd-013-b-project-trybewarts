const loginButton = document.getElementById('login-button');
const login = document.getElementById('login');
const senha = document.getElementById('senha');

loginButton.addEventListener('click', () => {
  const loginPadrao = 'tryber@teste.com';
  const senhaPadrao = '123456';
  if (login.value === loginPadrao && senha.value === senhaPadrao) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const botao = document.getElementById('submit-btn');
botao.disabled = true;
const checkbox = document.getElementById('agreement');
checkbox.addEventListener('input', () => {
  const conteudo = document.getElementById('agreement');
  if (conteudo.checked === true) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
});
