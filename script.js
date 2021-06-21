const button = document.querySelector('#submit-btn');

function enableButton() {
  const check = document.querySelector('#agreement');
  if (check.checked === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

document.querySelector('#agreement').addEventListener('click', enableButton);

function validade() {
  const username = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  if (username === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', validade);

function counter() {
  const count = document.querySelector('#counter');
  const textArea = document.querySelector('#textarea');

  count.innerText = 500 - textArea.textLength;
}

document.querySelector('#textarea').addEventListener('keyup', counter);

const saveSkills = () => {
  const skills = document.querySelectorAll('.subject:checked');
  let appendSkills = '';
  for (let index = 0; index < skills.length; index += 1) {
    appendSkills += `${skills[index].value}, `;
  }
  return appendSkills;
};

const retrieveItems = () => {
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const family = document.querySelector('[name="family"]:checked').value;
  const materias = saveSkills();
  const avalia = document.querySelector('[name="rate"]:checked').value;
  const observa = document.querySelector('#textarea').value;
  document.querySelector('#evaluation-form').innerText = `Nome: ${name} ${lastName}
  Email: ${email}
  Família: ${family}
  Casa: ${casa}
  Matérias: ${materias}
  Avaliação: ${avalia}
  Observações: ${observa}
  `;
};

button.addEventListener('click', retrieveItems);
