document.querySelector('#button').addEventListener('click', () => {
  const inputName = document.querySelector('#nome').value;
  const inputPassword = document.querySelector('#password').value;
  if (inputName !== 'tryber@teste.com' || inputPassword !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

function enableBtnSubmit() {
  const checkAccept = document.getElementById('agreement');
  const submitBtn = document.getElementById('submit-btn');
  if (checkAccept.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
enableBtnSubmit();

const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const limite = textArea.maxLength;
counter.innerText = limite;

textArea.addEventListener('keyup', () => {
  const qtdcaracteres = textArea.value.length;
  const restantes = limite - qtdcaracteres;
  counter.innerText = restantes;
});
