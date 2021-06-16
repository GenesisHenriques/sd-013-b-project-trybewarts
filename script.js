// botão de entrada, inputs de login e senha

const login = document.querySelector('.botao-login');

login.addEventListener('click', () => {
  if (document.getElementById('login').value !== 'tryber@teste.com'
  || document.getElementById('senha').value !== '123456') {
    window.alert('Login ou senha inválidos.');
  } else {
    window.alert('Olá, Tryber!');
  }
});

// checar se botão está selecionado
const checkBtn = document.getElementById('agreement');
const subBtn = document.getElementById('submit-btn');

function submitAvailable() {
  if (checkBtn.checked === false) {
    subBtn.setAttribute('disabled', '');
  } else if (checkBtn.checked === true) {
    subBtn.removeAttribute('disabled');
  }
}
submitAvailable();
checkBtn.addEventListener('click', submitAvailable);
