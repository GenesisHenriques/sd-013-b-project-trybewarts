function checkLoginAndPassword() {
  const login = document.getElementById('input-login').value;
  const password = document.getElementById('input-password').value;
  console.log(login);
  console.log(password);

  if (login === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

document.getElementById('btn-login').addEventListener('click', checkLoginAndPassword);
