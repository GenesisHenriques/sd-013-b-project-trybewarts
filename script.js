window.onload = function () {
  divComentario.append('Caracteres restantes: ');
};

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