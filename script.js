// Padrão email e senha ao clicar no botão

function pattern() {
  const button = document.getElementById('button');
  button.addEventListener('click', () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      alert('Olá, Tryber!');
    }
    if (email.value !== 'tryber@teste.com' || password.value !== '123456') {
      alert('Login ou senha inválidos.');
    }
  });
}
pattern();
