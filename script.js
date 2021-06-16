const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', checkUser);

function checkUser() {
  const userLogin = document.getElementById('user-login');
  const userPassword = document.getElementById('user-password');
  const user = userLogin.value;
  const password = userPassword.value;
  let email = 'tryber@teste.com';
  const senha = '123456';
  if (user === email && password === senha) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
