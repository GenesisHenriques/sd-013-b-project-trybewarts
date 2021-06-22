const cadastros = {
  user: 'tryber@teste.com',
  pass: '123456',
};

const bntLogin = document.getElementById('bntLogin');
const btnEnviar = document.getElementById('submit-btn');
const forms = document.getElementById('evaluation-form');
const formsFields = forms.children;

function validarLogin() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;

  if ((cadastros.user === login) && (cadastros.pass === senha)) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function checkAgreement(checkbox) {
  if (checkbox.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
}

function hideForm() {
  for (let index = 0; index < formsFields.length; index += 1) {
    formsFields[index].setAttribute('hidden', '');
  }
}

const verifyCheckedRadio = (elements) => {
  for (let index = 0; index < elements.length; index += 1) {
    if (elements[index].checked) return elements[index].value;
  }
};

const verifyCheckboxes = (elements) => {
  const checkeds = [];
  for (let index = 0; index < elements.length; index += 1) {
    if (elements[index].checked) {
      checkeds.push(` ${elements[index].value}`);
    }
  }
  return checkeds;
};

function sendStorage() {
  localStorage.setItem('Nome', document.getElementById('input-name').value);
  localStorage.setItem('Sobrenome', document.getElementById('input-lastname').value);
  localStorage.setItem('Email', document.getElementById('input-email').value);
  localStorage.setItem('Casa', document.getElementById('house').value);
  localStorage.setItem('Familia', verifyCheckedRadio(document.getElementsByName('family')));
  localStorage.setItem('Materias', verifyCheckboxes(document.getElementsByName('content')));
  localStorage.setItem('Avaliacao', verifyCheckedRadio(document.getElementsByName('rate')));
  localStorage.setItem('Observacoes', document.getElementById('textarea').value);
}

function createDataFields() {
  const name = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  const data = [
    `Nome: ${name} ${lastname}`,
    `Email: ${document.getElementById('input-email').value}`,
    `Casa: ${document.getElementById('house').value}`,
    `Família: ${verifyCheckedRadio(document.getElementsByName('family'))}`,
    `Matérias: ${verifyCheckboxes(document.getElementsByName('content'))}`,
    `Avaliação: ${verifyCheckedRadio(document.getElementsByName('rate'))}`,
    `Observações: ${document.getElementById('textarea').value}`,
  ];
  for (let index = 0; index < data.length; index += 1) {
    const field = document.createElement('p');
    field.innerText = data[index];
    forms.append(field);
  }
}

function showData(event) {
  event.preventDefault();
  sendStorage();
  hideForm();
  createDataFields();
}

window.onload = () => {
  checkAgreement(document.getElementById('agreement'));
  bntLogin.addEventListener('click', validarLogin);
  btnEnviar.addEventListener('click', showData);
};
