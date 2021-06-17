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
  paiRadioButtons.appendChild(radio);
  label.innerHTML = index;
  paiRadioButtons.appendChild(label);
}
