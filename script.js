function loginVerify() {
  const User = 'tryber@teste.com';
  const Pass = '123456';
  const login = document.getElementById('Login').value;
  const senha = document.getElementById('Senha').value;
  if (User === login && Pass === senha) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const logar = document.getElementById('logar');
logar.addEventListener('click', loginVerify);

function checkVerify() {
  const checkbox = document.getElementById('agreement');
  const btn = document.getElementById('submit-btn');

  if (checkbox.checked) {
    btn.removeAttribute('disabled', 'disabled');
  } else {
    btn.setAttribute('disabled', 'disabled');
  }
}

checkVerify();

const agree = document.getElementById('agreement');
agree.addEventListener('click', checkVerify);
