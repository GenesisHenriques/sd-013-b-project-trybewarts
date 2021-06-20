function alerta() {
  const login = document.querySelector('#login');
  const password = document.querySelector('#password');
  const button = document.querySelector('#button');
  button.addEventListener('click', () => {
    if (login.value === 'tryber@teste.com' && password.value === '123456') {
      alert('Olá, Tryber!')
    } 
    else {
      alert('Login ou senha inválidos.')
    }
  });
}
alerta();
