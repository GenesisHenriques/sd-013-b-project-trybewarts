const maxTextLength = 500;

// validação de login
const loginButton = document.getElementById('logar');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();

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

// salvando informações do formulário
function validateName(inputId) {
  const nameInput = document.querySelector(inputId);
  const name = nameInput.value.trim();

  if (!name.length) {
    throw new Error('Erro! Nome inválido');
  }

  return name;
}

function validateEmail() {
  const emailInput = document.querySelector('#input-email');
  const email = emailInput.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.match(emailPattern)) {
    throw new Error('Erro! Email inválido');
  }

  return email;
}

const submitButton = document.querySelector('#submit-btn');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  try {
    const formData = {
      name: validateName('#input-name'),
      lastName: validateName('#input-lastname'),
      email: validateEmail(),
    };

    console.log(formData);
  } catch (error) {
    alert(error.message);
  }
});
