function alerta() {
  const login = document.querySelector('#login');
  const password = document.querySelector('#password');
  const button = document.querySelector('#button');
  button.addEventListener('click', () => {
    if (login.value === 'tryber@teste.com' && password.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
alerta();
// Último botão
const buttonCheck = () => {
  const button = document.querySelector('#submit-btn');
  const check = document.querySelector('#agreement');
  check.addEventListener('click', () => {
    if (check.checked !== true) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });
};
buttonCheck();
