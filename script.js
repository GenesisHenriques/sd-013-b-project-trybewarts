const btnForm = document.getElementById('btn-form');
const login = document.getElementById('login');
const password = document.getElementById('password');

function validForm() {
  btnForm.addEventListener('click', () => {
    if ((login.value !== 'tryber@teste.com') || (password.value !== '123456')) {
      alert('Login ou senha inválidos.');
    }
    if ((login.value === 'tryber@teste.com') && (password.value === '123456')) {
      alert('Olá, Tryber!');
    }
  });
}

validForm();

// Faz com que o botão submit esteja desativado
// e seja ativado se o input agrement estiver selecionado
const buttonEnable = document.getElementById('submit-btn');

function enable() {
  const inputCheckAgreement = document.getElementById('agreement').checked;
  if (inputCheckAgreement) {
    buttonEnable.disabled = false;
  } else {
    buttonEnable.disabled = true;
  }
}

enable();
