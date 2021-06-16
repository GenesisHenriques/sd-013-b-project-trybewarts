const botao = document.querySelector('.btn');

function Login() {
  const usuario = document.querySelector('.username').value;
  const senha = document.querySelector('.password').value;
  if (usuario === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
}

botao.addEventListener('click', Login);
