document.querySelector('.login').addEventListener('click', () => {
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

document.getElementById('textarea').addEventListener('input', () => {
  const counter = document.getElementById('counter');
  const textArea = document.getElementById('textarea').value.length;
  counter.textContent = 500 - textArea;
});
