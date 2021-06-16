const maxTextLength = 500;

// validação de login
const loginButton = document.getElementById('logar');

loginButton.addEventListener('click', () => {
  const login = document.querySelector('#login-input').value;
  const senha = document.querySelector('#password-input').value;

  if (login !== 'tryber@teste.com' || senha !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

// habilitando e desabilitando botão de submit
const agreementCheckbox = document.querySelector('#agreement');

agreementCheckbox.addEventListener('change', (event) => {
  const submitButton = document.querySelector('#submit-btn');

  submitButton.disabled = !event.target.checked;
});

// contador de caracteres
const textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', (event) => {
  const counter = document.querySelector('#counter');

  counter.innerText = maxTextLength - event.target.value.length;
});
