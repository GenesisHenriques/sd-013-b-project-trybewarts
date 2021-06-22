const loginButton = document.querySelector('#button-login');

function loginSituation() {
  const email = document.querySelector('#email-login');
  const senha = document.querySelector('#senha-login');

  if (email.innerText === 'tryber@teste.com' && senha.innerText === '123456') {
    alert('Olá Tryber!');
  } else {
    alert('Login ou senha inválidos');
  }
}

loginButton.addEventListener('click', loginSituation);

window.onload = loginSituation;
