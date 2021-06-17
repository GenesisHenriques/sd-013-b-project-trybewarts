// script do funcionamento do botão de entrar, do requisito 3

const entrar = document.getElementById('entrar');
const padraoLogin = 'tryber@teste.com';
const padraoSenha = '123456';

entrar.addEventListener('click', () => {
  const login = document.getElementById('input-login');
  const senha = document.getElementById('input-senha');
  if (login.value === padraoLogin && senha.value === padraoSenha) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
});

// script para criar os radio buttons dinaâmicamente do requisito 14

const paiRadioButtons = document.getElementById('pai-radio-buttons');

for (let index = 1; index <= 10; index += 1) {
  const radio = document.createElement('input');
  const label = document.createElement('label');
  radio.type = 'radio';
  radio.value = index;
  radio.name = 'rate';
  radio.id = index;
  paiRadioButtons.appendChild(radio);
  label.innerHTML = index;
  label.htmlFor = index;
  paiRadioButtons.appendChild(label);
}

// script do requisito 18 - fazer o botão ser habilitado com o checkbox
// o 'disabled = true' serve para desabilitar um botão, assim como o '= false' habilita novamente

const checkbox = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
submit.disabled = true;

checkbox.addEventListener('click', (evento) => {
  if (evento.target.checked) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});
