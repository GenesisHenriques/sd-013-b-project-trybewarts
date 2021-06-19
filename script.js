function Logar() {
  const email = document.querySelector('.input-email').value;
  const senha = document.querySelector('.input-senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const buttonLogin = document.querySelector('.button-login');
buttonLogin.addEventListener('click', Logar);

const checkBox = document.querySelector('#agreement');
const buttonEnviar = document.querySelector('#submit-btn');
buttonEnviar.disabled = true;

function Enviar() {
  if (checkBox.checked === true) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
}

checkBox.addEventListener('click', Enviar);
