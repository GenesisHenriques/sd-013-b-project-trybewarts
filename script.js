const login = document.getElementById('login-btn')

function getLogin() {
  const email = document.getElementById('email').value; 
  const password = document.getElementById('password').value;
  if (email === 'tryber@teste.com' && password === '123456'){
    alert('Olá, Tryber!')
  } else {
    alert('Login ou senha inválidos.');
  }
}

login.addEventListener('click', getLogin);

// window.onload = function () {
// };

const botaoEnviar = document.getElementById('submit-btn');
botaoEnviar.disabled = true;

const checboxAgreement = document.querySelector('#agreement');

function verificarCheckboxAgreement() {
  // se check = true (ou seja, se marcado)
  if (checboxAgreement.checked) {
    // habilita o botão
    botaoEnviar.disabled = false;
  } else {
    // senão, desabilita o botão
    botaoEnviar.disabled = true;
  }
}
checboxAgreement.addEventListener('click', verificarCheckboxAgreement);
