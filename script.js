document.querySelector('.login').addEventListener('click', (e) => {
  e.preventDefault();
  const inputLogin = document.getElementById('login').value;
  const inputSenha = document.getElementById('senha').value;
  return inputLogin !== 'tryber@teste.com' || inputSenha !== '123456'
    ? alert('Login ou senha inválidos.')
    : alert('Olá, Tryber!');
});

document.getElementById('agreement').addEventListener('click', () => {
  const check = document.getElementById('agreement');
  const button = document.getElementById('submit-btn');
  if (check.value === 'false') {
    button.removeAttribute('disabled');
    check.value = 'true';
  } else {
    button.disabled = true;
    check.value = 'false';
  }
});

document.getElementById('textarea').addEventListener('keyup', (event) => {
  const counter = document.getElementById('counter');
  counter.innerText = 500 - event.target.value.length;
});

document.getElementById('submit-btn').addEventListener('click', () => {
  const name = document.getElementById('input-name');
  name.innerText = name.value;
});
