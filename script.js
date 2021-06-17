function loginValidation() {
  const login = document.querySelector('#login').value;
  const password = document.querySelector('#password').value;
  const trueLogin = 'tryber@teste.com';
  const passwordtrue = '123456';
  if (login !== trueLogin || password !== passwordtrue) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
const button = document.querySelector('#login-button');
button.addEventListener('click', loginValidation);

function counter() {
  const text = document.querySelector('textarea').value;
  const counter1 = document.querySelector('#counter');
  let contador = 0;
  let resultado = 0;
  counter1.innerHTML = '500';
  for (let index = 0; index < text.length; index += 1) {
    contador += 1;
    const max = 500;
    resultado = max - contador;
    counter1.innerHTML = resultado;
  }
}

const count = document.querySelector('textarea');
count.addEventListener('input', counter);

function ableIt() {
  const button = document.querySelector('#submit-btn');
  button.toggleAttribute('disabled');
}
const checkbox = document.querySelector('#agreement');
checkbox.addEventListener('click', ableIt);