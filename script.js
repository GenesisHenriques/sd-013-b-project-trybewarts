// Pega o ID do login, senha e botão
const submitButton = document.getElementById('submit-button');

// AddEventListeners
submitButton.addEventListener('click', () => {
  const login = document.getElementById('login-input').value;
  const password = document.getElementById('password-input').value;

  console.log(login);
  console.log(password);

  // Checagem dos dados
  if (login === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

function changeDisabled() {
  const confirm = document.getElementById('agreement');
  const sendBtn = document.getElementById('submit-btn');

  if (confirm.checked) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
}

const confirmBtn = document.getElementById('agreement');
confirmBtn.addEventListener('click', changeDisabled);

// créditos: http://www.codigoti.com.br/2018/04/javascript-contando-caracteres-dentro.html
// falta consertar, o certo é decrementando.
const counterText = document.getElementById('counter');
function counterBox(event) {
  const { target } = event;
  const longitudMax = event.target.getAttribute('maxlength');
  const longitudAct = target.value.length;
  counterText.innerHTML = `${longitudAct}/${longitudMax}`;
}
const boxText = document.getElementById('textarea');
boxText.addEventListener('input', counterBox);
