const login = document.getElementById('login-btn')

function getLogin() {
  const email = document.getElementById('email').value; 
  const password = document.getElementById('password').value;
  if (email === 'tryber@teste.com' && password === '123456'){
    alert('Olá, Tryber!')
  } else {
    alert('Login ou senha inválidos.');
  }
}

login.addEventListener('click', getLogin);