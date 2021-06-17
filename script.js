const submitBtn = document.querySelector('#submit-btn');
const agreementBox = document.querySelector('#agreement');
function checkUserAgreement() {
  if (!agreementBox.checked) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}
agreementBox.addEventListener('change', checkUserAgreement);
