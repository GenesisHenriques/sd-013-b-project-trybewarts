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
const label = document.querySelector('label');
const select = document.getElementById('house');
const option = document.querySelectorAll('#option');

function updHouse() {
  let pHouse = document.createElement('div');
  for (index = 0; index < option.length; index += 1) {
    if (option[index].id === 'gitnoria-house') {
      pHouse.innerText = 'Casa: Gitnória';
      divInput.appendChild(pHouse);
      divInput.removeChild(label);
      divInput.removeChild(select); 
    } else if (option[index].id === 'reactpuff-house') {
      pHouse.innerText = 'Casa: Reactpuff';
      divInput.removeChild(label);
      divInput.removeChild(select);
      divInput.appendChild(pHouse);
    } else if (option[index].id === 'corvinode-house') {
      pHouse.innerText = 'Casa: Corvinode';
      divInput.appendChild(pHouse);
      divInput.removeChild(label);
      divInput.removeChild(select);
    } else if (option.id === 'pytherina-house') {
      pHouse.innerText = 'Casa: Pytherina';
      divInput.appendChild(pHouse);
      divInput.removeChild(label);
      divInput.removeChild(select);
    } else {
      pHouse.innerText = 'Casa: Sem casa';
    }
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
