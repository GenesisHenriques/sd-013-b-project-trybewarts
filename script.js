const loginInput = document.querySelector('#login'); // seleciona input do login
const loginButton = document.querySelector('#login-button'); // seleciona botão para logar
const passwordInput = document.querySelector('#password'); // seleciona input da senha
const agreeCheckbox = document.querySelector('#agreement'); // seleciona o checkbox de concordo com os termos
const agreeBtn = document.querySelector('#submit-btn'); // seleciona o botão de enviar no final do formulário
const textArea = document.querySelector('#textarea'); // seleciona a text area
const counter = document.querySelector('#counter'); // seleciona o counter de caracteres
const name = document.querySelector('#input-name'); // seleciona o nome
const lastName = document.querySelector('#input-lastname'); // seleciona o ultimo nome
const email = document.querySelector('#input-email'); // seleciona o email
const house = document.querySelector('#house'); // seleciona a casa escolhida
const selected = document.querySelector('input[name = "family"]:checked'); // seleciona a familia marcada
const checkBox = document.querySelectorAll('input[type = "checkbox"]:checked'); // seleciona a checkbox de conteudos
const rate = document.querySelector('input[name = "rate"]:checked'); // seleciona a nota de avaliação
const form = document.querySelector('#evaluation-form'); // seleciona o escopo main do body

function verifyLogin() {
  if (loginInput.value !== 'tryber@teste.com') return false;
  if (passwordInput.value !== '123456') return false;
  return true;
}
loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (verifyLogin()) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

agreeCheckbox.addEventListener('change', () => {
  agreeBtn.toggleAttribute('disabled');
  agreeBtn.classList.toggle('btn-disabled');
  agreeBtn.classList.toggle('btn-enabled');
});

textArea.addEventListener('input', () => {
  const cont = 500 - textArea.value.length;
  counter.innerHTML = cont;
});

function getData() {
  const userData = [];
  const materias = [];
  userData.push(`Nome: ${name.value} ${lastName.value}`);
  userData.push(`Email: ${email.value}`);
  userData.push(`Casa: ${house.value}`);
  userData.push(`Família: ${selected.value}`);
  for (let i = 0; i < checkBox.length - 1; i += 1) {
    materias.push(`${checkBox[i].value}`);
  }
  userData.push(materias);
  userData.push(`Avaliações: ${rate.value}`);
  userData.push(`Observações: ${textArea.value}`);
  return userData;
}

function generateData() {
  const userData = getData();
  form.innerHTML = '';
  const div = document.createElement('div');
  form.appendChild(div);
  console.log(userData);
  for (let i = 0; i < userData.length; i += 1) {
    const p = document.createElement('p');
    if (i === 4) {
      p.innerHTML = `Matérias: ${userData[i]} `;
      p.setAttribute('class', 'subject');
      div.appendChild(p);
    } else { 
      p.innerHTML = userData[i];
      div.appendChild(p);
    }
  }
}

agreeBtn.addEventListener('click', generateData);
