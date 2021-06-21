function assignLoginAlert() {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  if (login !== 'tryber@test.com' && password !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

const submitButton = document.getElementById('submit-btn');
function handleButtonState(event) {
  if (event.target.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function addListeners() {
  const loginButton = document.getElementById('button');
  loginButton.addEventListener('click', assignLoginAlert);

  const agreementCheckbox = document.getElementById('agreement');
  agreementCheckbox.addEventListener('click', handleButtonState);

  submitButton.disabled = true;
}

window.onload = addListeners;
