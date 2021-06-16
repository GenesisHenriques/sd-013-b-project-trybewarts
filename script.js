function checkLogin(event) {
  event.preventDefault();
  const inputLogin = document.getElementById('login').value;
  const inputPassword = document.getElementById('password').value;

  if (inputLogin === 'tryber@teste.com' && inputPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }

  console.log(typeof inputLogin, typeof inputPassword);
}

window.onload = () => {
  const buttonLogin = document.getElementById('buttonLogin');

  buttonLogin.addEventListener('click', checkLogin);
};
