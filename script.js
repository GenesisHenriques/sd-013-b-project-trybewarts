/* __________________LOGIN__________________ */
function assignLoginAlert() {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  if (login !== 'tryber@test.com' && password !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

/* __________________ACEITAR TERMOS__________________ */
const submitButton = document.getElementById('submit-btn');
function handleButtonState(event) {
  if (event.target.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

/* __________________CONTADOR DE CARACTERES__________________ */
function count() {
  const characters = textarea.value.length;
  const maxlenght = textarea.maxLength;
  const remaining = maxlenght - characters;
  counter.innerText = remaining;
}

/* __________________ONLOAD__________________ */
function addListeners() {
  const loginButton = document.getElementById('button');
  loginButton.addEventListener('click', assignLoginAlert);

  const agreementCheckbox = document.getElementById('agreement');
  agreementCheckbox.addEventListener('click', handleButtonState);

  const textarea = document.getElementById('textarea');
  textarea.addEventListener('input', count);

  const counter = document.getElementById('counter');
  counter.innerText = textarea.maxLength;

  submitButton.disabled = true;
}

window.onload = addListeners;


