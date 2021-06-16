window.onload = function() {
  document.getElementById('submit-btn').disabled = true;
}

const checboxAgreement = document.querySelector('#agreement');

function verificarCheckboxAgreement() {
  // se check = true (ou seja, se marcado)
  if (checboxAgreement.checked) {
    // habilita o botão
    document.getElementById('submit-btn').disabled = false;
  } else {
    // senão, desabilita o botão
    document.getElementById('submit-btn').disabled = true;
  }
}
checboxAgreement.addEventListener('click', verificarCheckboxAgreement);
