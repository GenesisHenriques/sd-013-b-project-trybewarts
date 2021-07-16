// Funções de Comportamento/Respostas a eventos
function submitLogin(event) {
  event.preventDefault();

  const form = event.target;
  const [email, password] = form.elements;
  // carai mlk manda ate um desestructuring
  if (email.value !== 'tryber@teste.com' || password.value !== '123456') {
    alert('Login ou senha inválidos.');
    return;
  }

  alert('Olá, Tryber!');
}

function checkboxValue(checked, value, oldValue) {
  if (checked) {
    return oldValue ? [...oldValue, value] : [value];
  }
  return oldValue;
}

function extractValue({ checked, type, value }, oldValue) {
  if (type === 'checkbox') {
    return checkboxValue(checked, value, oldValue);
  }
  if (type === 'radio') {
    return checked ? value : oldValue;
  }
  return value;
}

function mountFormData(form) {
  return [...form].reduce((formData, dado) => ({
    ...formData,
    [dado.name]: extractValue(dado, formData[dado.name]),
  }), {});
}

// function mountFormData(form) {
//   return [...form].reduce((formData, dado) => {
//     console.log(formData);
//     return {
//       ...formData,
//       [dado.name]: extractValue(dado, formData[dado.name]),
//     };
//   }, {});
// }

function submitEvaluation(event) {
  event.preventDefault();
  const form = event.target;
  const formData = mountFormData(form);

  form.innerHTML = `Nome: ${formData.name} ${formData.lastname}
    Email: ${formData.email}
    Casa: ${formData.casa}
    Família: ${formData.family}
    Matérias: ${formData.content ? formData.content.join(', ') : ''}
    Avaliação: ${formData.rate}
    Observações: ${formData.comment}`;
}

function toggleButton() {
  const submitButton = document.getElementById('submit-btn');
  submitButton.disabled = !submitButton.disabled;
}

function updateCounter(event) {
  const textarea = event.target;
  const counter = document.querySelector('#counter');

  counter.innerHTML = `${textarea.maxLength - textarea.value.length}`;
}

// Espera o carregamento da página
window.onload = () => {
  document
    .querySelector('.trybewarts-login')
    .addEventListener('submit', submitLogin);

  document
    .querySelector('#evaluation-form')
    .addEventListener('submit', submitEvaluation);

  document.getElementById('agreement').addEventListener('click', toggleButton);

  document.querySelector('#textarea').addEventListener('keyup', updateCounter);
};
