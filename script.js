const button = document.getElementById('button');

function submitForm(event) {
  event.preventDefault();
  const email = document.getElementById('login');
  const senha = document.getElementById('password');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }  
}

button.addEventListener('click', submitForm);
