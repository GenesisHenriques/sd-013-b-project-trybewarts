function assignLoginAlert() {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  if (login !== 'tryber@test.com' && password !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
function sendButtonLogin() {
  const buttonLogin = document.getElementById('button');
  buttonLogin.addEventListener('click', assignLoginAlert);
}
window.onload = () => {
  sendButtonLogin();
};

function handleButtonState() {
  const agreementCheckbox = document.getElementById('agreement');
  const submitButton = document.getElementById('submit-btn');
  submitButton.disabled = true;
  agreementCheckbox.addEventListener('click', (event) => {
    if (event.target.checked) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
}
handleButtonState();
