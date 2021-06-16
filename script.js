function enableButton() {
  const check = document.querySelector('#agreement');
  if (check.checked === true) {
    document.querySelector('#submit-btn').disabled = false;
  } else {
    document.querySelector('#submit-btn').disabled = true;
  }
}

document.querySelector('#agreement').addEventListener('click', enableButton);
