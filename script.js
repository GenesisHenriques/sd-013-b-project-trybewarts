function validade() {
  const username = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  if (username === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
const button = document.getElementById('checkButton');
button.addEventListener('click', validade);
