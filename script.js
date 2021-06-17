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
