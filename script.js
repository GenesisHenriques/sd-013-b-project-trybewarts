const inputLogin = document.querySelector('#login');
const inputPassword = document.querySelector('#password');
const agreement = document.querySelector('#agreement');
const button = document.querySelector('#submit-btn');

document.querySelector('#btn-login').addEventListener('click', () => {
  if (inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

agreement.addEventListener('change', () => {
  if (button.disabled === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
  // Aprendi sobre button.disabled, neste link
  // https://flexiple.com/disable-button-javascript/
});

button.onclick = function () {

  const subjectArray = document.querySelectorAll('input[type="checkbox"]:checked');

  let subjectList = '';
  for (let index = 0; index < subjectArray.length; index += 1) {
    if (subjectList === '') {
      subjectList = `${subjectArray[index].value}`;
    } else {
      subjectList = subjectList + `, ${subjectArray[index].value}`;
    }
  }
  
  const dataArray = [
  'Nome: ', `${document.getElementById('input-name').value} `, `${document.getElementById('input-lastname').value}`,
  'Email: ', `${document.getElementById('input-email').value}`, '',
  'Casa: ', `${document.getElementById('house').value}`, '',
  'Família: ', `${document.querySelector('input[name="family"]:checked').value}`, '',
  'Matérias: ', `${subjectList}`, '',
  'Avaliação: ', `${document.querySelector('input[name="rate"]:checked').value}`, '',
  'Observações: ', `${document.getElementById('textarea-box').value}`, ''
  ]

  const enteredDataArea = document.getElementById('main-content');
  enteredDataArea.innerHTML = '';
  const newUl = document.createElement('ul');
  newUl.className = 'entered-data-area'
  enteredDataArea.appendChild(newUl);

  for (let index = 0; index < dataArray.length; index += 3) {
    const ul = document.querySelector('.entered-data-area');
    let newLi = document.createElement('li');
    newLi.innerText = `${dataArray[index]}${dataArray[index + 1]}${dataArray[index + 2]}`;
    ul.appendChild(newLi);
  }
}
