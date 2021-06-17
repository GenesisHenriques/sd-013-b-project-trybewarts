window.onload = function () {
  divComentario.append('Caracteres restantes: ');
};

const login = document.getElementById('login-btn');

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


const botaoEnviar = document.getElementById('submit-btn');
botaoEnviar.disabled = true;
const checboxAgreement = document.querySelector('#agreement');
let divComentario = document.querySelector('#comentario');

/* let textarea = document.querySelector('#textarea');
let textoCompleto = document.querySelector('#textarea').value;
let qtdMaxCaracteres = 500;
let contadorResultado = document.createElement('label');
let contador = 5; */

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

/* 
function contarCaracteresTextarea() {
  contador = contador - 1;
  divComentario.append(contador + ' ');
  console.log(textoCompleto);
}

textarea.addEventListener('input', contarCaracteresTextarea); */

let contador = 5;
let desc = document.querySelector("#textarea");
desc.addEventListener("keypress", function(e) {
  let maxChars = 5;
  
  contador = contador - 1;
  inputLength = desc.value.length;
  
  if(inputLength >= maxChars) {
    e.preventDefault();
  }
  
  divComentario.append(contador + ' ');

});