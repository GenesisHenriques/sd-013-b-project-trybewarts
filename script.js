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

checkBox.addEventListener('click', () => {
  const submit = document.getElementById('submit-btn');
  if (submit.disabled === true) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});
