<<<<<<< HEAD
=======
function checkLogin() {
  const login = document.querySelector('.Login');
  const password = document.querySelector('.Password');
  const correctLogin = 'tryber@teste.com';
  const correctPassword = '123456';
  if (login.value === correctLogin && password.value === correctPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
>>>>>>> db4c89fbf945ac8ea6a610c9abcf13ff58c2973d
const loginButton = document.querySelector('.Enter');
loginButton.addEventListener('click', checkLogin);
