const botaoEnviar = document.getElementById('botao');

botaoEnviar.addEventListener('click', () => {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const checkBox = document.getElementById('agreement');

checkBox.addEventListener('click', () => {
  const submit = document.getElementById('submit-btn');
  if (submit.disabled === true) {
    submit.style.backgroundColor = 'rgb(20, 25, 27)';
    submit.style.color = 'rgb(255, 255, 255)';
    submit.style.cursor = 'pointer';
    submit.disabled = false;
  } else {
    submit.style.backgroundColor = 'rgb(200, 200, 200)';
    submit.style.color = 'rgb(0, 0, 0)';
    submit.style.cursor = 'auto';
    submit.disabled = true;
  }
});

const textArea = document.getElementById('textarea');
textArea.addEventListener('input', () => {
  const remainingCharsText = document.getElementById('counter');
  const maxChars = 500;
  const remaining = maxChars - textArea.value.length;
  remainingCharsText.innerText = `Limite de caracteres: ${remaining}`;
  if (remaining === 0) {
    remainingCharsText.style.color = 'rgb(63, 64, 69)';
  } else if (remaining < 100) {
    remainingCharsText.style.color = 'rgb(225, 45, 48)';
  } else if (remaining < 300) {
    remainingCharsText.style.color = 'rgb(241, 136, 5)';
  }
});

function getCheckedMateria() {
  const materia = document.getElementsByName('materia');
  let checkedBox = '';
  for (let index = 0; index < materia.length; index += 1) {
    if (materia[index].checked) {
      checkedBox += `${materia[index].value}, `;
    }
  }
  return checkedBox;
}

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', () => {
  const firstName = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = document.querySelectorAll('input[name=family]:checked')[0].value;
  const materiaChecked = getCheckedMateria();
  const rate = document.querySelectorAll('input[name=rate]:checked')[0].value;
  const observation = document.getElementById('textarea').value;

  const form = document.getElementById('evaluation-form');
  form.innerText = `Nome: ${firstName} ${lastName}
  Email: ${email}
  Casa: ${house}
  Família: ${family}
  Matérias: ${materiaChecked}
  Avaliação: ${rate}
  Observações: ${observation}`;
});
