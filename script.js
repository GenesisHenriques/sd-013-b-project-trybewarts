function loginFail() {
  alert('Login ou senha inválidos');
}

function loginSuccess() {
  alert('Olá, Tryber!');
}

const loginBtn = document.querySelector('#loginBtn');
loginBtn.addEventListener('click', () => {
  const user = document.querySelector('#username').value;
  const pwd = document.querySelector('#password').value;
  const standardUser = 'tryber@teste.com';
  const standardPwd = '123456';
  if (user === standardUser && pwd === standardPwd) {
    return loginSuccess();
  }
  return loginFail();
});
