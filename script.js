const loginButton = document.getElementById('login-button');
const login = document.getElementById('login');
const senha = document.getElementById('senha');

function entrar() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', entrar);

const check = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function enableBtn() {
  if (check.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

check.addEventListener('click', enableBtn);

const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const maxCaracteres = 500;

function charCounter() {
  const caracteresRestantes = maxCaracteres - textArea.value.length;
  counter.textContent = caracteresRestantes;
}

textArea.addEventListener('input', charCounter);

function stopDefAction(event) {
  event.preventDefault();
}

const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const divInput = document.querySelector('.box-container');
const inputEmail = document.getElementById('input-email');
const label = document.getElementById('label');
const select = document.getElementById('house');
const option = document.querySelectorAll('option');

function updHouse() {
  const pHouse = document.createElement('div');
  divInput.appendChild(pHouse);
  divInput.removeChild(label);
  divInput.removeChild(select);
  if (option[0].value === 'gitnoria') {
    pHouse.innerText = 'eita';
  } else if (option[1].value === 'reactpuff') {
    pHouse.innerText = 'Casa: Reactpuff';
  } else if (option[2].value === 'corvinode') {
    pHouse.innerText = 'Casa: Corvinode';
  } else if (option[3].value === 'pytherina') {
    pHouse.innerText = 'Casa: Pytherina';
  } else {
    pHouse.innerText = 'Casa: Sem casa';
  }
}

function updFormName() {
  const createP = document.createElement('div');
  createP.innerText = `Nome: ${inputName.value} ${inputLastName.value}`;
  divInput.appendChild(createP);
  divInput.removeChild(inputName);
  divInput.removeChild(inputLastName);
}

function updFormEmail() {
  const pEmail = document.createElement('div');
  pEmail.innerText = `Email: ${inputEmail.value}`;
  divInput.appendChild(pEmail);
  divInput.removeChild(inputEmail);
}

function updtForm() {
  divInput.style.flexDirection = 'column';
  updFormName();
  updFormEmail();
  updHouse();
}

submitBtn.addEventListener('click', stopDefAction, false);
submitBtn.addEventListener('click', updtForm);
