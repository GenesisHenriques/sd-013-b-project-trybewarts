const email = document.getElementById('input-login');
const password = document.getElementById('input-senha');
const loginButton = document.getElementById('entrar');
const agreementCheckBox = document.getElementById('agreement');
const sendButton = document.getElementById('submit-btn');

function checkEmail() {
  for (let letter = 0; letter < email.value.length; letter += 1) {
    if (email.value[letter] === '@') {
      return true;
    }
  }
  return false;
}

function passwordCheck() {
  if (password.value !== '') {
    return true;
  }
  return false;
}

function checkLogin() {
  if (passwordCheck() === true && checkEmail() === true) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', checkLogin);

function enableSendButton() {
  if (agreementCheckBox.checked) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}

agreementCheckBox.addEventListener('click', enableSendButton);

function getName() {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  return (`${name} ${lastName}`);
}

function getFamily() {
  const familys = document.getElementsByName('family');
  for (let value = 0; value < familys.length; value += 1) {
    if (familys[value].checked) {
      return (familys[value].value);
    }
  }
}

function getMaterias() {
  const options = document.querySelectorAll('.checkbox-div .checkbox-item input');
  const materias = [];
  for (let items = 0; items < options.length; items += 1) {
    if (options[items].checked) {
      materias.push(options[items].value);
    }
  }
  return (materias.join(', '));
}

function getAvaliacao() {
  const notas = document.getElementsByName('rate');
  for (let nota = 0; nota < notas.length; nota += 1) {
    if (notas[nota].checked) {
      return (notas[nota].value);
    }
  }
}

function filledInfo() {
  const emailInput = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const obs = document.getElementById('textarea').value;
  return (`Nome: ${getName()}
  Email: ${emailInput}
  Casa: ${house}
  Família: ${getFamily()}
  Matérias: ${getMaterias()}
  Avaliação: ${getAvaliacao()}
  Observações: ${obs}
`);
}

function replaceForm() {
  const text = document.createElement('p');
  text.innerText = filledInfo();
  const form = document.getElementById('evaluation-form');
  form.innerHTML = '';
  form.appendChild(text);
}

sendButton.addEventListener('click', replaceForm);
