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
const loginButton = document.querySelector('.Enter');
loginButton.addEventListener('click', checkLogin);
const checkButton = document.getElementById('agreement');
function addSubmitButton() {
  const submitButton = document.getElementById('submit-btn');
  submitButton.removeAttribute('disabled');
}
checkButton.addEventListener('click', addSubmitButton);
