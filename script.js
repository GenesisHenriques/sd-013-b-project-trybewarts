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
const sendButton = document.getElementById('submit-btn');

checkbox.onclick = function canSendForm() {
  sendButton.toggleAttribute('disabled');
};

// Textarea words count
const textArea = document.getElementById('textarea');

textArea.onkeyup = function countLetters() {
  const counter = document.getElementById('counter');
  counter.innerText = 500 - textArea.value.length;
};

// 21. Faça com que ao clicar no botão 'Enviar', o conteúdo do formulário seja substituído pelas informações preenchidas
const forms = document.getElementById('evaluation-form');
function remakeName() {
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const nomeText = document.createElement('p');
  nomeText.innerText = `Nome: ${name.value} ${lastName.value}`;
  forms.appendChild(nomeText);
}

function remakeEmail() {
  const email = document.getElementById('input-email');
  const emailText = document.createElement('p');
  emailText.innerText = `Email: ${email.value}`;
  forms.appendChild(emailText);
}

function remakeHouse() {
  const house = document.getElementById('house');
  const houseText = document.createElement('p');
  houseText.innerText = `Casa: ${house.value}`;
  forms.appendChild(houseText);
}

function remakeFamily() {
  let family = document.getElementsByName('family');
  function displayRadioValue() {
    for (let index = 0; index < family.length; index += 1) {
      if (family[index].checked) family = family[index].value;
    }
  }
  displayRadioValue();
  const familyText = document.createElement('p');
  familyText.innerText = `Família: ${family}`;
  forms.appendChild(familyText);
}

function remakeMaterias() {
  let materiasList = '';
  const materias = document.getElementsByClassName('subject');
  function displayCheckboxValues() {
    for (let index = 0; index < materias.length; index += 1) {
      if (materias[index].checked) {
        materiasList += `${materias[index].value}, `;
      }
    }
  }
  displayCheckboxValues();
  const materiasText = document.createElement('p');
  materiasText.innerText = `Matérias: ${materiasList}`;
  forms.appendChild(materiasText);
}

function remakeRate() {
  let rate = document.getElementsByName('rate');
  function displayRateValue() {
    for (let index = 0; index < rate.length; index += 1) {
      if (rate[index].checked) rate = rate[index].value;
    }
  }
  displayRateValue();
  const rateText = document.createElement('p');
  rateText.innerText = `Avaliação: ${rate}`;
  forms.appendChild(rateText);
}

function remakeTextArea() {
  const textArea2 = document.getElementById('textarea');
  textArea2.innerText = textArea2.value;
  const textAreaText = document.createElement('p');
  textAreaText.innerText = `Observações: ${textArea2.value}`;
  forms.appendChild(textAreaText);
}

sendButton.onclick = function fillForms() {
  remakeName();
  remakeEmail();
  remakeHouse();
  remakeFamily();
  remakeMaterias();
  remakeRate();
  remakeTextArea();
  const div1Forms = document.getElementById('div1Forms');
  div1Forms.remove();
  const div2Forms = document.getElementById('div2Forms');
  div2Forms.remove();
  const div3Forms = document.getElementById('div3Forms');
  div3Forms.remove();
  const div4Forms = document.getElementById('div4Forms');
  div4Forms.remove();
  const div5Forms = document.getElementById('div5Forms');
  div5Forms.remove();
};