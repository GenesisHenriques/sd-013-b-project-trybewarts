const btn = document.querySelector('#confirmar');
const checkBox = document.querySelector('#agreement');
const btnTermos = document.querySelector('#submit-btn');

function verifcaCheck() {
  if (checkBox.value === 'sim') {
    btnTermos.disabled = false;
    checkBox.value = 'nao';
  } else {
    btnTermos.disabled = true;
    checkBox.value = 'sim';
  }
}

checkBox.addEventListener('click', () => {
  verifcaCheck();
});

function verifcaLogin(login, senha) {
  if (login === 'tryber@teste.com' || senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btn.addEventListener('click', () => {
  const inputLogin = document.querySelector('#textLogin').value;
  const inputPassword = document.querySelector('#textSenha').value;
  verifcaLogin(inputLogin, inputPassword);
});
