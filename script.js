function handleLogin() {
  const userInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  if (userInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    return window.alert('Olá, Tryber!');
  }
  return window.alert('Login ou senha inválidos.');
}

const loginButton = document.querySelector('')