// Requesito 3 - autenticando formulario e seus inputs
const inputLogin = document.getElementById('input-login');
const inputSenha = document.getElementById('input-senha');
const botaoEntrar = document.getElementById('button-entrar');

function login() {
  if (inputLogin.value !== 'tryber@teste.com' && inputSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  }
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  }
}
botaoEntrar.addEventListener('click', login);

// Requesito 14 - Radios buttons do elemento label-rate(avalia de 1 a 10);
const containerRate = document.getElementById('label-container-3');

function criarRadioButtonsRate() {
  for (let index = 0; index <= 10; index += 1) {
    const radioButtonRate = document.createElement('input');
    radioButtonRate.type = 'radio';
    radioButtonRate.value = index;
    radioButtonRate.id = index;
    radioButtonRate.name = 'rate';
    const labelDoRadio = document.createElement('label');
    labelDoRadio.for = index;
    labelDoRadio.innerText = index.toString();
    containerRate.appendChild(radioButtonRate);
    containerRate.appendChild(labelDoRadio);
  }
}
criarRadioButtonsRate();