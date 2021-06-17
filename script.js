// Login
const loginButton = document.getElementById('login-button');

function interrompeForm(event) {
  event.preventDefault();
}
loginButton.addEventListener('click', interrompeForm);

loginButton.addEventListener('click', () => {
  const login = document.getElementById('login').value;
  const pwd = document.getElementById('senha').value;
  if (login === 'tryber@teste.com' && pwd === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
});
const getPermission = document.getElementById('agreement');

function verify() {
  console.log('test função');
  const bntEnviar = document.getElementById('submit-btn');
  if (getPermission.checked !== true) {
    console.log('teste se');
    bntEnviar.disable = 'true';
  } else {
    console.log('teste else');
    bntEnviar.disable = 'false';
  }
}
getPermission.addEventListener('click', verify);
