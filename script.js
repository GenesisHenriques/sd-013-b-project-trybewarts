const login = document.querySelector('#login');
const password = document.querySelector('#password');
const bttn = document.querySelector('#bttn');

bttn.addEventListener('click', validEmail);
function validEmail (event) {
  if (login.value === "tryber@teste.com" && password.value === "123456") {
    alert('Olá, Tryber!');
  }
  else {
    alert('Login ou senha inválidos');
  }
}