const wordCounter = document.getElementById('counter');
wordCounter.innerText = 500;

const handleSubmit = (event) => {
  event.preventDefault();

  const email = document.getElementById('email-login').value;
  const senha = document.getElementById('senha-login').value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
};

const checkAgreement = (event) => {
  const btnSubmit = document.getElementById('submit-btn');
  btnSubmit.disabled = !event.target.checked;
};

const changeWordCount = (event) => {
  const textarea = event.target;

  console.log(textarea.value.length);
  wordCounter.innerText = 500 - textarea.value.length;
};

document.getElementById('form-login').addEventListener('submit', handleSubmit);

document.getElementById('agreement').addEventListener('change', checkAgreement);

document.getElementById('textarea').addEventListener('input', changeWordCount);
