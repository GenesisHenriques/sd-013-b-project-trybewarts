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
