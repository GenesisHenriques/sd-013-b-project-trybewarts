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
