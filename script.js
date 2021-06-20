// Header autorize button
const userInput = document.getElementById('login-user');
const passInput = document.getElementById('login-pass');
const confirmButton = document.getElementById('login-button');

confirmButton.onclick = function pegarLogin() {
  const confirmUser = userInput.value;
  const confirmPass = passInput.value;
  if (confirmUser === 'tryber@teste.com' && confirmPass === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
};

// Forms- Enviar formulário principal
const checkbox = document.getElementById('agreement');

checkbox.onclick = function canSendForm() {
  const sendButton = document.getElementById('submit-btn');
  sendButton.toggleAttribute('disabled');
};

// Textarea words count
const textArea = document.getElementById('textarea');

textArea.onkeyup = function countLetters() {
  const counter = document.getElementById('counter');
  counter.innerText = 500 - textArea.value.length;
};
