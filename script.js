const inputName = document.querySelector('#nome');
const inputPassword = document.querySelector('#password');
const checkAccept = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const inputFirstName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const formFull = document.querySelector('#evaluation-form');
const inputEmail = document.querySelector('#input-email');
const inputHome = document.querySelector('#house');

document.querySelector('#button').addEventListener('click', () => {
  if (inputName.value !== 'tryber@teste.com' || inputPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

function enableBtnSubmit() {
  if (checkAccept.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
enableBtnSubmit();

function viewComent() {
  const limite = textArea.maxLength;
  counter.innerText = limite;
  textArea.addEventListener('keyup', () => {
    const qtdcaracteres = textArea.value.length;
    const restantes = limite - qtdcaracteres;
    counter.innerText = restantes;
  });
}
viewComent();

function createElementForm(fild) {
  const textFildForm = document.createElement('span');
  textFildForm.innerHTML = fild;
  return textFildForm;
}

function createFildTextName() {
  const textFildName = `${inputFirstName.name} ${inputFirstName.value} ${inputLastName.value}`;
  const fildFormName = createElementForm(textFildName);
  formFull.appendChild(fildFormName);
}

function createFildTextEmail() {
  const textFildEmail = `${inputEmail.name} ${inputEmail.value}`;
  const fildFormEmail = createElementForm(textFildEmail);
  formFull.appendChild(fildFormEmail);
}

function createFildSelectHome() {
  const textFildHome = `${inputHome.name} ${inputHome.options[inputHome.selectedIndex].value}`;
  const fildFormhome = createElementForm(textFildHome);
  formFull.appendChild(fildFormhome);
}

function createFildCheckFamily() {
  const textFildFamily = `${document.querySelector('input[name="family"]:checked').className}
  ${document.querySelector('input[name="family"]:checked').value}`;
  const textFormFamily = createElementForm(textFildFamily);
  formFull.appendChild(textFormFamily);
}

function createFildCheckMaterias() {
  const materias = document.querySelectorAll('[class="subject"]:checked');
  const values = [];
  for (let index = 0; index < materias.length; index += 1) {
    values.push(`${''} ${materias[index].value}`);
  }
  const textFormMaterias = createElementForm(`Matérias: ${values}`);
  formFull.appendChild(textFormMaterias);
}

function createFildCheckAvaliacao() {
  const textFildAvaliacao = `${document.querySelector('input[name="rate"]:checked').className}
  ${document.querySelector('input[name="rate"]:checked').value}`;
  const textFormAvaliacao = createElementForm(textFildAvaliacao);
  formFull.appendChild(textFormAvaliacao);
}

function createFildCTextObservation() {
  const textFildObservation = createElementForm(`${textArea.name} ${textArea.value}`);
  formFull.appendChild(textFildObservation);
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  createFildTextName();
  createFildTextEmail();
  createFildSelectHome();
  createFildCheckFamily();
  createFildCheckMaterias();
  createFildCheckAvaliacao();
  createFildCTextObservation();
});
