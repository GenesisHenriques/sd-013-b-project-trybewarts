// Ínicio de Trecho de Código do Genesis
function validatingLogin() {
  const login = document.getElementById('login');
  const password = document.getElementById('password');

  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
    window.location.href = "./cadastro.html";
  } else {
    alert('Login ou senha inválidos.');
  }
}

function setPreventDefault(event) {
  event.preventDefault();
  validatingLogin();
}

document.getElementById('btnLogin').addEventListener('click', setPreventDefault);

