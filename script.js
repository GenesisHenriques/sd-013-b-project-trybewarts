const maxTextLength = 500;

// validação de login
function addLoginButtonEventListener() {
  const loginButton = document.getElementById('login-button');

  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    const login = document.querySelector('#login-input').value;
    const senha = document.querySelector('#password-input').value;
    if (login !== 'tryber@teste.com' || senha !== '123456') {
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
  });
}

// habilitando e desabilitando botão de submit
function addAgreementCheckboxEventListener() {
  const agreementCheckbox = document.querySelector('#agreement');

  agreementCheckbox.addEventListener('change', (event) => {
    const submitButton = document.querySelector('#submit-btn');

    submitButton.disabled = !event.target.checked;
  });
}

// contador de caracteres
function addTextAreaEventListener() {
  const textarea = document.querySelector('textarea');

  textarea.addEventListener('keyup', (event) => {
    const counter = document.querySelector('#counter');

    counter.innerText = maxTextLength - event.target.value.length;
  });
}

// salvando informações do formulário
function getName(inputId) {
  const nameInput = document.querySelector(inputId);
  const name = nameInput.value.trim();

  if (!name.length) {
    throw new Error('Erro! Nome inválido');
  }

  return name;
}

function getEmail() {
  const emailInput = document.querySelector('#input-email');
  const email = emailInput.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.match(emailPattern)) {
    throw new Error('Erro! Email inválido');
  }

  return email;
}

function getSelectedHouse() {
  const houseSelect = document.querySelector('#house');

  if (!houseSelect.selectedIndex) {
    throw new Error('Erro! Selecione uma casa');
  }

  return houseSelect.options[houseSelect.selectedIndex].innerText;
}

function getSelectedRadioInput(inputs) {
  let selectedInput = '';

  inputs.forEach((input) => {
    if (input.checked) {
      selectedInput = input.value;
      return null;
    }
  });

  return selectedInput;
}

function getSelectedFamily() {
  const familyInputs = document.querySelectorAll('input[name="family"]');
  const selectedInput = getSelectedRadioInput(familyInputs);

  if (selectedInput === '') {
    throw new Error('Erro! Selecione uma família');
  }

  return selectedInput;
}

function getSelectedContent() {
  const contentInputs = document.querySelectorAll('input[name="content"]');
  const selectedInputs = [];

  contentInputs.forEach((input) => {
    if (input.checked) {
      selectedInputs.push(input.value);
    }
  });

  if (!selectedInputs.length) {
    throw new Error('Erro! Selecione ao menos um conteúdo');
  }

  return selectedInputs;
}

function getRating() {
  const ratingInputs = document.querySelectorAll('input[name="rate"]');
  const selectedInput = getSelectedRadioInput(ratingInputs);

  if (selectedInput === '') {
    throw new Error('Erro! Dê uma nota de avaliação');
  }

  return selectedInput;
}

function getComment() {
  const textArea = document.querySelector('textarea');
  const text = textArea.value.trim();

  if (!text.length) {
    throw new Error('Erro! Escreva um comentário');
  }

  return text;
}

function getFormData() {
  return {
    name: getName('#input-name'),
    lastName: getName('#input-lastname'),
    email: getEmail(),
    house: getSelectedHouse(),
    family: getSelectedFamily(),
    content: getSelectedContent(),
    rating: getRating(),
    comment: getComment(),
  };
}

function createUserDataElement(elementName, text) {
  const element = document.createElement('p');
  element.innerText = `${elementName}: ${text}`;

  return element;
}

function setResponse(formData) {
  const form = document.querySelector('#evaluation-form');
  form.innerHTML = '';

  const fullName = `${formData.name} ${formData.lastName}`;
  const content = formData.content.join(', ');

  form.appendChild(createUserDataElement('Nome', fullName));
  form.appendChild(createUserDataElement('Email', formData.email));
  form.appendChild(createUserDataElement('Casa', formData.house));
  form.appendChild(createUserDataElement('Família', formData.family));
  form.appendChild(createUserDataElement('Matérias', content));
  form.appendChild(createUserDataElement('Avaliação', formData.rating));
  form.appendChild(createUserDataElement('Observações', formData.comment));
}

function addSubmitButtonEventListener() {
  const submitButton = document.querySelector('#submit-btn');

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    try {
      const formData = getFormData();

      setResponse(formData);
    } catch (error) {
      alert(error.message);
    }
  });
}

window.onload = () => {
  addLoginButtonEventListener();
  addAgreementCheckboxEventListener();
  addTextAreaEventListener();
  addSubmitButtonEventListener();
};
