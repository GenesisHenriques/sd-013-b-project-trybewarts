// Padrão email e senha ao clicar no botão

function pattern() {
  const button = document.getElementById('button');
  button.addEventListener('click', () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      alert('Olá, Tryber!');
    }
    if (email.value !== 'tryber@teste.com' || password.value !== '123456') {
      alert('Login ou senha inválidos.');
    }
  });
}
pattern();

// Criar 10 radios buttons de 1 a 10

function createRadioButtons() {
  const div = document.getElementById('label-div');
  for (let index = 1; index < 11; index += 1) {
    const radioButton = document.createElement('input');
    const label = document.createElement('label');
    radioButton.value = index;
    radioButton.type = 'radio';
    radioButton.name = 'rate';
    label.innerHTML = index;
    div.appendChild(radioButton);
    div.appendChild(label);
  }
}
createRadioButtons();

// Verificar se o check das infos foi selecionado

function verifyCheck() {
  const checkbox = document.getElementById('agreement');
  const submit = document.getElementById('submit-btn');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked === true) {
      submit.disabled = false;
    }
    if (checkbox.checked !== true) {
      submit.disabled = true;
    }
  });
}
verifyCheck();

// Commit Bruna
