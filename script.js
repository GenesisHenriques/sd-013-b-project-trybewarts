const butao = document.getElementsByClassName('forms');
const login =document.getElementById('login');
const senha =document.getElementById('senha');

function alerta (){
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

butao.addeventlistener('click', alerta);