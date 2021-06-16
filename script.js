const botaoEnviar = document.getElementById('botao');

botaoEnviar.addEventListener('click', () => {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const checkBox = document.getElementById('agreement');

let check = true;
checkBox.addEventListener('click', () => {
  if (check === true) {
    // check = false;
    document.getElementById('submit-btn').disabled = false;
  } else {
    // check = true;
    document.getElementById('submit-btn').disabled = true;
  }
});
