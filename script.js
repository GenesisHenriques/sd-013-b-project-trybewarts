function authenticateLogin() { // função para autentificar o login
  const inputEmail = document.querySelector('#login');
  const inputPassword = document.querySelector('#senha');
  const fail = 'Login ou senha inválidos.';
  const sucess = 'Olá, Tryber!';
  if (inputEmail.value !== 'tryber@teste.com' || inputPassword.value !== '123456') {
    window.alert(fail);
  } else {
    window.alert(sucess);
  }
}
const buttonLogin = document.querySelector('#buttonLogin');
buttonLogin.addEventListener('click', authenticateLogin);

function authenticateCheckboxAgreement() { // função para a funcionalidade do botão;
  const inputAgreement = document.querySelector('#agreement'); // recuperando o input;
  const submitBtn = document.querySelector('#submit-btn'); // recuperando o button;
  if (inputAgreement.checked === true) { // se houver a propriedade checked no input;
    submitBtn.disabled = false; // não desabilite o botão;
  } else { // caso contrario;
    submitBtn.disabled = true; // desabilite o botão;
  }
}

const input = document.querySelector('#agreement');
input.addEventListener('click', authenticateCheckboxAgreement);

const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const maxLength = 500;

counter.innerText = String(maxLength);

function changeLetterCounter(event) {
  counter.innerText = maxLength - event.target.value.length;
}

textArea.addEventListener('keyup', changeLetterCounter);
