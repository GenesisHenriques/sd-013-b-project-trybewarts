function validacaoEmailSenha() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  const loginPadrao = 'tryber@teste.com';
  const senhaPadrao = '123456';
  if (login !== loginPadrao || senha !== senhaPadrao) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
document.querySelector('.login').addEventListener('click', validacaoEmailSenha);

function hideApear() {
  const checkboxEnviar = document.getElementById('agreement');
  const submit = document.getElementById('submit-btn');
  if (checkboxEnviar.checked !== true) {
    submit.setAttribute('disabled', true);
  } else {
    submit.removeAttribute('disabled');
  }
}
document.getElementById('agreement').addEventListener('click', hideApear);
