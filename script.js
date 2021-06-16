const button = document.querySelector('.button-login');

function Logar() {
  const email = document.querySelector('.input-email').value;
  const senha = document.querySelector('.input-senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

button.addEventListener('click', Logar);
