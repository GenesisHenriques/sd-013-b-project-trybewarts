const botaoLogar = document.querySelector('#enviar');

function verificarLoginESenha() {
  const login = document.querySelector('#login');
  const loginValor = login.value;
  const senha = document.querySelector('#senha');
  const senhaValor = senha.value;

  if (loginValor === 'tryber@teste.com' && senhaValor === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

botaoLogar.addEventListener("click", verificarLoginESenha);


const checkBotao = document.querySelector('#agreement');

checkBotao.addEventListener('click', function (){
  let check = document.querySelector('#agreement').checked;
  let botaoEnviar = document.querySelector('#submit-btn');
  if(check == true) {
    botaoEnviar.removeAttribute('disabled');
  } else {
    botaoEnviar.setAttribute('disabled', 'disabled');
  }
})
