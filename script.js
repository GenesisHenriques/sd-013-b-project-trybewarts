// Funções de Comportamento/Respostas a eventos
function submitLogin(event) {
  event.preventDefault();

  const form = event.target;
  const [email, password] = form.elements;

  if (email.value !== 'tryber@teste.com' || password.value !== '123456') {
    alert('Login ou senha inválidos.');
    return;
  }

  alert('Olá, Tryber!');
}

// Espera o carregamento da página
window.onload = () => {
  document.querySelector('.trybewarts-login').addEventListener('submit', submitLogin);
}
