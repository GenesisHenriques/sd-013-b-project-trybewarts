const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;

function checked() {
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  }
}

function noChecked() {
  if (agreement.checked === false) {
    submitBtn.disabled = true;
  }
}

function ableSubmit() {
  agreement.addEventListener('click', checked);
}

ableSubmit();

function disableSubmit() {
  agreement.addEventListener('click', noChecked);
}

disableSubmit();
