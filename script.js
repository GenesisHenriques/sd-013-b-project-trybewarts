// Ínicio de Trecho de Código do Genesis
function validatingLogin() {
  const login = document.getElementById('login');
  const password = document.getElementById('password');

  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function setPreventDefault(event) {
  event.preventDefault();
  validatingLogin();
}

document.getElementById('btnLogin').addEventListener('click', setPreventDefault);

// -----Requisito 20-------
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function counterCaracter() {
  counter.innerText = `Caracteres Disponíveis: ${500 - textArea.value.length}`;
}

textArea.addEventListener('input', counterCaracter);

//-----Requisito 21-------
function removeAddName() {
  const father = document.getElementsByClassName('personal-info-div')[0];
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
   
  let text = document.createElement('p');
  text.innerText = `Nome: -${name.value}- -${lastName.value}-`;
  father.appendChild(text);
  
  father.removeChild(name);
  father.removeChild(lastName);
}

function removeAddEmail () {
  const father = document.getElementsByClassName('email-and-house-div')[0];
  const email = document.getElementById('input-email');

  let text = document.createElement('p');
  text.innerText = `Email: -${email.value}-`;
  father.appendChild(text);

  father.removeChild(email);
}

function removeAddHouse() {
  const father = document.getElementsByClassName('email-and-house-div')[0];
  const house = document.getElementById('house');
  const labelHouse = document.getElementById('labelHouse');

  let text = document.createElement('p');
  text.innerText = `Casa: -${house.value}-`;
  father.appendChild(text);

  father.removeChild(house);
  father.removeChild(labelHouse);
}

function removeAddFamily() {
  const father = document.getElementsByClassName('family-div')[0];
  const children = document.querySelectorAll('.family-radio-btn');
  const label = document.getElementById('label-family');
  console.log(children)
  let family = '';
  
  if (document.getElementById('familyUm').checked === true) {
    family = document.getElementById('familyUm');
  } else if (document.getElementById('familyDois').checked === true) {
    family = document.getElementById('familyDois');
  } else if (document.getElementById('familyTres').checked === true) {
    family = document.getElementById('familyTres');
  } else {}
  
  let text = document.createElement('p');
  text.innerText = `Família: -${family.value}-`;
  father.appendChild(text);
  
  for (const child of children) {
    child.remove();
  }
  father.removeChild(label);
  
}

function removeAddContent() {
  const subject = document.getElementsByClassName('subject');
  const father = document.getElementsByClassName('content-div')[0];
  let itens = '';
  
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked === true) {
      itens += `${subject[index].value} `;
    } 
  }

  let item = document.createElement('p');
  item.innerText = `Matérias: -${itens}-`;
  father.appendChild(item);

  father.removeChild(document.getElementById('label-content'));
  father.removeChild(document.getElementsByClassName('checkbox-div')[0]);

}

function genesis() {
  
  removeAddName();
  removeAddEmail();
  removeAddHouse();
  removeAddFamily();
  removeAddContent();
}







// Fim de Trecho de Código do Genesis

// Inicio de Trecho de código do Alan
function generateRateButtons() {
  const rateDiv = document.getElementsByClassName('rate-div');
  for (let index = 1; index < 11; index += 1) {
    const radioBtn = document.createElement('input');
    const radioBtnLabel = document.createElement('label');
    radioBtn.setAttribute('type', 'radio');
    radioBtn.setAttribute('name', 'rate');
    radioBtn.setAttribute('value', index);
    radioBtn.setAttribute('id', index);
    radioBtnLabel.setAttribute('for', index);
    radioBtnLabel.innerText = index;
    rateDiv[0].appendChild(radioBtn);
    rateDiv[0].appendChild(radioBtnLabel);
  }
}

generateRateButtons();

const agreementCheckBox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function checkAgreement() {
  if (agreementCheckBox.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

checkAgreement();
agreementCheckBox.addEventListener('click', checkAgreement);
// Fim de Trecho de Código do Alan
