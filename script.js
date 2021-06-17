const loginInput = document.querySelector('#login'); // seleciona input do login
const loginButton = document.querySelector('#login-button'); // seleciona botão para logar
const passwordInput = document.querySelector('#password'); // seleciona input da senha
const agreeCheckbox = document.querySelector('#agreement'); // seleciona o checkbox de concordo com os termos
const agreeBtn = document.querySelector('#submit-btn'); // seleciona o botão de enviar no final do formulário
const textArea = document.querySelector('#textarea'); // seleciona a text area
const counter = document.querySelector('#counter'); // seleciona o counter de caracteres

function verifyLogin() {
  if (loginInput.value !== 'tryber@teste.com') return false;
  if (passwordInput.value !== '123456') return false;
  return true;
}
loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (verifyLogin()) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
agreeCheckbox.addEventListener('change', () => {
  agreeBtn.toggleAttribute('disabled');
  agreeBtn.classList.toggle('btn-disabled');
  agreeBtn.classList.toggle('btn-enabled');
});

textArea.addEventListener('input', (e) => {
  let cont = 500 - textArea.value.length;
  counter.innerHTML = cont;
})