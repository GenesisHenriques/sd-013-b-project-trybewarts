function handleLogin() {
  const userInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  if (userInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    return window.alert('Olá, Tryber!');
  }
  return window.alert('Login ou senha inválidos.');
}

// function handleSubmit(event) {
//   const { target } = event;
//   target.disabled = false;
// }

const loginButton = document.querySelector('#login-button');
loginButton.addEventListener('click', handleLogin);

const agreement = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
submitButton.addEventListener('click', (event) => {
  const form = document.querySelector('#evaluation-form');
  const name = document.querySelector('#input-name');
  const lastname = document.querySelector('#input-lastname');
  console.log(`${name.value} ${lastname.value}`);
  form.Nome = `${name.value} ${lastname.value}`;
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
//  submitButton.addEventListener('click', handleSubmit);

const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
textArea.addEventListener('keyup', (event) => {
  const { target } = event;
  const textCount = 500 - Number(target.value.length);
  counter.innerText = textCount;
  console.log(textCount);
});
