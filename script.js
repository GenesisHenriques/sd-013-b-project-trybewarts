const Boxes = document.querySelectorAll('.subject');
const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;

function checked() {
  for (let i = 0; i < Boxes.length; i += 1) {
    if (Boxes[i].checked === true) {
      submitBtn.disabled = false;
    }
  }
}

function zeroChecked() {
  let nonCheckedQtd = 0;
  for (let i = 0; i < Boxes.length; i += 1) {
    if (Boxes[i].checked === false) {
      nonCheckedQtd += 1;
    }
  }
  if (nonCheckedQtd === Boxes.length) {
    submitBtn.disabled = true;
  }
}

function ableSubmit() {
  for (let i = 0; i < Boxes.length; i += 1) {
    Boxes[i].addEventListener('click', checked);
  }
}

ableSubmit();

function disableSubmit() {
  for (let i = 0; i < Boxes.length; i += 1) {
    Boxes[i].addEventListener('click', zeroChecked);
  }
}

disableSubmit();
