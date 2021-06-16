let botao = document.querySelector('.btn')
botao.addEventListener('click', Login)

function Login() {
    let usuario = document.querySelector('.username').value;
    let senha = document.querySelector('.password').value;
    if (usuario == 'tryber@teste.com' && senha == "123456") {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Login ou senha inválidos.');
    }
  }