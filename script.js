const button = document.querySelector('.logar');

button.addEventListener('click', () => {
  const senha = document.querySelector('.senha').value;
  const email = document.querySelector('.email').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
});

function releasingSubmitButton() {
  const checkBox = document.getElementById('agreement');
  const submitButton = document.getElementById('submit-btn');
  if (checkBox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

const agreement = document.querySelector('#agreement');
agreement.addEventListener('click', releasingSubmitButton);
