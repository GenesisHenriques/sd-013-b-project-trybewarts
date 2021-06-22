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

document.getElementById('form-login').addEventListener('submit', handleSubmit);

document.getElementById('agreement').addEventListener('change', checkAgreement);
