function welcomeTrybe() {
  const valLogin = document.getElementById('login').value;
  const valSenha = document.getElementById('senha').value;

  if (valLogin !== ('tryber@teste.com' || valSenha !== '12345')) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

document.getElementById('button-login').addEventListener('click', welcomeTrybe);
