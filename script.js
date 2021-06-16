// validação de login
const logarButton = document.getElementById('logar');
function validateLogin() {
  const login = document.getElementsByTagName('input')[0].value;
  const senha = document.getElementsByTagName('input')[1].value;
  if (login !== 'tryber@teste.com' || senha !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
logarButton.addEventListener('click', validateLogin);
