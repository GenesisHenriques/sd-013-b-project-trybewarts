const btnForm = document.getElementById('btn-form');
const login = document.getElementById('login');
const password = document.getElementById('password');

function validForm() {
  btnForm.addEventListener('click', () => {
    if ((login.value !== 'tryber@teste.com') || (password.value !== '123456')) {
      alert('Login ou senha inválidos.');
    }
    if ((login.value === 'tryber@teste.com') && (password.value === '123456')) {
      alert('Olá, Tryber!');
    }
  });
}

validForm();

// Faz com que o botão submit esteja desativado
// e seja ativado se o input agrement estiver selecionado

const buttonEnable = document.getElementById('submit-btn');

function enable() {
  const inputCheckAgreement = document.getElementById('agreement').checked;
  if (inputCheckAgreement) {
    buttonEnable.disabled = false;
  } else {
    buttonEnable.disabled = true;
  }
}

enable();

// Cria um contador para o textera
// Pesquisando:
// Neste consegui ajuda para o css:
// source: http://jsfiddle.net/oyhf3812/
// source: https://www.w3schools.com/jsref/event_onkeyup.asp
// source: https://stackoverflow.com/questions/14086398/count-textarea-characters
// A resposta estava aqui:
// source: https://stackoverflow.com/questions/24875414/addeventlistener-change-and-option-selection

const counter = document.querySelector('#counter');

const textarea = document.querySelector('#textarea');

// O addEventListener input aciona toda vez que o elemento recebe um input
textarea.addEventListener('input', () => {
  counter.innerText = `${500 - textarea.value.length}/500`;
});

const form = document.querySelector('#evaluation-form');

function getValue(id) {
  return document.getElementById(id).value;
}

const createLabelOne = document.createElement('label');
buttonEnable.addEventListener('click', () => {
  createLabelOne.innerText = `Nome: ${getValue('input-name')} ${getValue('input-lastname')}`;
});

const createLabelTwo = document.createElement('label');
buttonEnable.addEventListener('click', () => {
  createLabelTwo.innerText = `Email: ${getValue('input-email')}`;
});

const getSelect = document.getElementById('house');
const labelThreeText = getSelect.selectedOptions[0].innerText;
const createLabelThree = document.createElement('label');
createLabelThree.innerText = `Casa: ${labelThreeText}`;

const createLabelFour = document.createElement('label');
const inputFamily = document.getElementsByName('family');

for (let index = 0; index < inputFamily.length; index += 1) {
  inputFamily[index].addEventListener('click', () => {
    createLabelFour.innerText = `Família: ${inputFamily[index].defaultValue}`;
  });
}

const createLabelFive = document.createElement('label');
buttonEnable.addEventListener('click', () => {
  createLabelFive.innerText = 'coc';
});

const createLabelSix = document.createElement('label');
buttonEnable.addEventListener('click', () => {
  createLabelSix.innerText = 'coc';
});

const createLabelSeven = document.createElement('label');
buttonEnable.addEventListener('click', () => {
  createLabelSeven.innerText = 'coc';
});

buttonEnable.addEventListener('click', () => {
  form.innerHTML = ' ';
  form.appendChild(createLabelOne);
  form.appendChild(createLabelTwo);
  form.appendChild(createLabelThree);
  form.appendChild(createLabelFour);
  form.appendChild(createLabelFive);
  form.appendChild(createLabelSix);
  form.appendChild(createLabelSeven);
});
