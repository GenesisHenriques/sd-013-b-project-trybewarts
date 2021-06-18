/** VARIÁVEIS */

const botaoEnviar = document.getElementById('submit-btn');
botaoEnviar.disabled = true;
const checboxAgreement = document.querySelector('#agreement');
const login = document.getElementById('login-btn');

const campoContagem = document.querySelector('#counter');
campoContagem.innerText = 500;
let maxCaracteres = 500;
let contagem = 0;

const textarea = document.querySelector('#textarea');


/** FUNÇÕES */

function getLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

login.addEventListener('click', getLogin);

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

function contarCaracteres() {
  let texto = textarea.value;
    contagem = maxCaracteres - texto.length;
  campoContagem.innerText = contagem;
}
textarea.addEventListener('keyup', contarCaracteres);
