function assignLoginAlert() {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  if (login !== 'tryber@test.com' && password !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
function sendButtonLogin() {
  const buttonLogin = document.getElementById('button');
  buttonLogin.addEventListener('click', assignLoginAlert);
}
window.onload = () => {
  sendButtonLogin();
};
