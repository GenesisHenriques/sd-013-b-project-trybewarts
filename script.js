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
