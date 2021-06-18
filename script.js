const cadastros = {
  user: 'tryber@teste.com',
  pass: '123456',
};

const bntLogin = document.getElementById('bntLogin');

function validarLogin() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;

  if ((cadastros.user === login) && (cadastros.pass === senha)) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function checkAgreement(checkbox) {
  if (checkbox.checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}

window.onload = () => {
  checkAgreement(document.getElementById('agreement'));
  bntLogin.addEventListener('click', validarLogin);
}
