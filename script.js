const defaultLogin = 'tryber@teste.com';
const defaultPassword = '123456';
const btnLogar = document.getElementById('btn-logar');
const inputLogin = document.getElementById('input-login');
const inputPassword = document.getElementById('input-password');
const mainForm = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputLastname = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const house = document.getElementById('house');
const textarea = document.getElementById('textarea');
const agreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const counter = document.getElementById('counter');

const validateLogin = (login, password) => {
  if (login === defaultLogin && password === defaultPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
};

const login = () => validateLogin(inputLogin.value, inputPassword.value);

const iAgree = () => {
  if (agreement.checked === true) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', 'disabled');
  }
};

const getCounter = () => {
  counter.innerText = 500 - (textarea.value.length);
};

btnLogar.addEventListener('click', login);
agreement.addEventListener('click', iAgree);
textarea.addEventListener('keyup', getCounter);

// Função inspirada no trabalho do Felippe & Manoel
const getFormData = () => {
  const selectedSubject = document.querySelectorAll('.subject:checked');
  const subjectValue = [];
  if (selectedSubject.length !== 0) {
    for (let index = 0; index < selectedSubject.length; index += 1) {
      subjectValue.push(selectedSubject[index].value);
    }
  }

  const data = {
    Nome: `${inputName.value} ${inputLastname.value}`,
    Email: inputEmail.value,
    Casa: house.value,
    Família: document.querySelector('input[name="family"]:checked').value,
    Matérias: subjectValue.join(', '),
    Avaliação: document.querySelector('input[name="rate"]:checked').value,
    Observações: textarea.value,
  };
  return data;
};

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  mainForm.appendChild(document.createElement('hr'));
  const data = getFormData();
  const entries = Object.entries(data);
  for (let index = 0; index < entries.length; index += 1) {
    const element = document.createElement('p');
    element.innerHTML = `${entries[index][0]}: ${entries[index][1]}`;
    mainForm.appendChild(element);
  }
});
