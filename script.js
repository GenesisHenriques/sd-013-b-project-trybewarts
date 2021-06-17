function handleLogin() {
  const userInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  if (userInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    return window.alert('Olá, Tryber!');
  }
  return window.alert('Login ou senha inválidos.');
};

const loginButton = document.querySelector('#login-button');
loginButton.addEventListener('click', handleLogin);

const agreement = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
submitButton.addEventListener('click', (event) => {
  const form = document.querySelector('#evaluation-form');
  const name = document.querySelector('#input-name');
  const lastname = document.querySelector('#input-lastname');
  const email = document.querySelector('#input-email');
  const house = document.querySelector('option[name="house"]:checked'); 
  const family = document.querySelector('input[name="family"]:checked');
  const materialList = document.querySelectorAll('input[class="subject"]:checked');
  const rate = document.querySelector('input[name="rate"]:checked');
  const obs = document.querySelector('#textarea');
  let material = ''
  materialList.forEach((element, index) => {
    if (index === (materialList.length - 1)) {
      material += `${element.value}`
      return
    }
    material += `${element.value}, `
  });;
  form.innerHTML = `
  <p>Nome: ${name.value} ${lastname.value}</p>
  <p>Email: ${email.value}</p>
  <p>Casa: ${house.innerText}</p>
  <p>Família: ${family.value}</p>
  <p>Matérias: ${material}</p>
  <p>Avaliação: ${rate.value}</p>
  <p>Observações: ${obs.value}</p>
  `;
  console.log('teste');
  event.preventDefault();
});

agreement.addEventListener('click', (event) => {
  const { checked } = event.target;
  if (checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
textArea.addEventListener('keyup', (event) => {
  const { target } = event;
  const textCount = 500 - Number(target.value.length);
  counter.innerText = textCount;
  console.log(textCount);
});
