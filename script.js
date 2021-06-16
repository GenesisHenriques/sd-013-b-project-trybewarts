function loginPassword() {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  if (login !== 'tryber@test.com' && password !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
function sendLogin() {
  const sendInformation = document.getElementById('button');
  sendInformation.addEventListener('click', loginPassword);
}
sendLogin();
