function welcomeTrybe() {
  const valLogin = document.getElementById('Login').value;
  const valSenha = document.getElementById('Senha').value;

  if (valLogin !== ('tryber@teste.com') && valSenha !== ('12345')) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

document.getElementById('button-login').addEventListener('click', welcomeTrybe);

function habilitaBotão() {
  const botao = document.querySelector('#submit-btn');
  const checkbox = document.querySelector('#agreement');
  if (checkbox.checked) {
    botao.disabled = false;
  } else { botao.disabled = true; }
}

const agreed = document.querySelector('#label-infos');
agreed.addEventListener('click', habilitaBotão);
