const boxes = document.getElementsByClassName('subject');
const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;

function checked() {
  for (let i = 0; i < boxes.length; i += 1) {
    if (boxes[i].checked === true) {
      submitBtn.disabled = false;
    }
  }
}

function zeroChecked() {
  let nonCheckedQtd = 0;
  for (let i = 0; i < boxes.length; i += 1) {
    if (boxes[i].checked === false) {
      nonCheckedQtd += 1;
    }
  }
  if (nonCheckedQtd === boxes.length) {
    submitBtn.disabled = true;
  }
}

function ableSubmit() {
  for (let i = 0; i < boxes.length; i += 1) {
    boxes[i].addEventListener('click', checked);
  }
}

ableSubmit();

function disableSubmit() {
  for (let i = 0; i < boxes.length; i += 1) {
    boxes[i].addEventListener('click', zeroChecked);
  }
}

disableSubmit();
