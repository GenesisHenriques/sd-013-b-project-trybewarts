const mainForm = document.querySelector('#evaluation-form');
const firstName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const house = document.querySelector('#house');
const loginBtn = document.querySelector('.btn');
const submitBtn = document.querySelector('#submit-btn');
const agreementCheckBox = document.querySelector('#agreement');
const commentTextArea = document.querySelector('#textarea');
const counterOutput = document.querySelector('#counter');
const maxCharacters = parseInt(commentTextArea.getAttribute('maxlength'), 10);

counterOutput.innerHTML = maxCharacters;

function performLogin() {
  const user = document.querySelector('.username').value;
  const password = document.querySelector('.password').value;
  if (user === 'tryber@teste.com' && password === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
}

function checkUserAgreement() {
  if (!agreementCheckBox.checked) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}

function countCharacters() {
  const string = commentTextArea.value;
  const remainingChars = maxCharacters - string.length;
  counterOutput.innerHTML = remainingChars;
}

function getFormData() {
  const subjectCheckBox = document.querySelectorAll('.subject:checked');
  const subjectData = [];
  if (subjectCheckBox == null) return;
  for (let index = 0; index < subjectCheckBox.length; index += 1) {
    subjectData.push(subjectCheckBox[index].value);
  }

  const data = {
    name: firstName.value,
    lastName: lastName.value,
    email: email.value,
    house: house.value,
    family: document.querySelector('input[name="family"]:checked').value,
    subjectList: subjectData.join(', '),
    rate: document.querySelector('input[name="rate"]:checked').value,
    observation: commentTextArea.value,
  };
  return data;
}

function displayFormData(event) {
  event.preventDefault();
  const nameParagraph = document.createElement('p');
  const emailParagraph = document.createElement('p');
  const houseParagraph = document.createElement('p');
  const familyParapraph = document.createElement('p');
  const subjectsParapgraph = document.createElement('p');
  const rateParagraph = document.createElement('p');
  const observationParagraph = document.createElement('p');
  nameParagraph.innerHTML = `Nome: ${getFormData().name} ${getFormData().lastName}`;
  emailParagraph.innerHTML = `Email: ${getFormData().email}`;
  houseParagraph.innerHTML = `Casa: ${getFormData().house}`;
  familyParapraph.innerHTML = `Família: ${getFormData().family}`;
  subjectsParapgraph.innerHTML = `Matérias: ${getFormData().subjectList}`;
  rateParagraph.innerHTML = `Avaliação: ${getFormData().rate}`;
  observationParagraph.innerHTML = `Observações: ${getFormData().observation}`;
  mainForm.append(nameParagraph, emailParagraph, houseParagraph,
    familyParapraph, subjectsParapgraph,
    rateParagraph, observationParagraph);
}

loginBtn.addEventListener('click', performLogin);
agreementCheckBox.addEventListener('change', checkUserAgreement);
commentTextArea.addEventListener('keyup', countCharacters);
submitBtn.addEventListener('click', displayFormData);