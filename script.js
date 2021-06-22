/** VARIÁVEIS */

const botaoEnviar = document.getElementById('submit-btn');
botaoEnviar.disabled = true;
const checboxAgreement = document.querySelector('#agreement');
const login = document.getElementById('login-btn');

const campoContagem = document.querySelector('#counter');
campoContagem.innerText = 500;
const maxCaracteres = 500;
let contagem = 0;

const textarea = document.querySelector('#textarea');
const respostas = document.querySelector('#respostas');

let radiosFamilia = document.getElementsByName('family');
let familiaEscolhida = '';
let conteudo = document.querySelectorAll('.subject');
let conteudoEscolhido = [];
let radiosAvaliacao = document.getElementsByName('rate');
let notaAvaliacao = '';
let main = document.querySelector('.main');
let formulario1 = document.querySelector('#evaluation-form');
let novoFormulario = document.createElement('form');

let item1 = document.createElement('p');
let item2 = document.createElement('p');
let item3 = document.createElement('p');
let item4 = document.createElement('p');
let item5 = document.createElement('p');
let item6 = document.createElement('p');
let item7 = document.createElement('p');

/** FUNÇÕES */

function getLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
login.addEventListener('click', getLogin);

function verificarCheckboxAgreement() {
  // se check = true (ou seja, se marcado)
  if (checboxAgreement.checked) {
    // habilita o botão
    botaoEnviar.disabled = false;
  } else {
    // senão, desabilita o botão
    botaoEnviar.disabled = true;
  }
}
checboxAgreement.addEventListener('click', verificarCheckboxAgreement);

function contarCaracteres() {
  const texto = textarea.value;
  contagem = maxCaracteres - texto.length;
  campoContagem.innerText = contagem;
}
textarea.addEventListener('keyup', contarCaracteres);

function salvarRespostas(event) {  
  event.preventDefault();/* cancela o evento, sem parar a sua execução, ou seja, faz com a página não seja recarregada, porem implementa o resto da função */
  for (let i = 0; i < radiosFamilia.length; i += 1) {
    if (radiosFamilia[i].checked) {
      familiaEscolhida = radiosFamilia[i].value;
    }
  }
  for (let i = 0; i < conteudo.length; i += 1) {
    if (conteudo[i].checked) {
      conteudoEscolhido.push(' ' + conteudo[i].value);
    }
  }
  for (let i = 0; i < radiosAvaliacao.length; i += 1) {
    if (radiosAvaliacao[i].checked) {
      notaAvaliacao = radiosAvaliacao[i].value;
    }
  }  
  imprimirFormularioPreenchido();
  criarNovoFormulario();
}
botaoEnviar.addEventListener('click', salvarRespostas);

function criarNovoFormulario() {
  formulario1.remove();
  novoFormulario.id = 'evaluation-form';
  main.append(novoFormulario);
}

function imprimirFormularioPreenchido() {
  let nome = document.querySelector('#input-name').value;
  let sobrenome = document.querySelector('#input-lastname').value;
  let email = document.querySelector('#input-email').value;
  let casa = document.querySelector('#house').value;
  comentario = textarea.value;

  item1.innerText = `Nome: ${nome} ${sobrenome}`;  
  item2.innerText = `Email: ${email}`;  
  item3.innerText = `Casa: ${casa}`;  
  item4.innerText = `Família: ${familiaEscolhida}`;
  item5.innerText = `Matérias: ${conteudoEscolhido}`;
  item6.innerText = `Avaliação: ${notaAvaliacao}`;
  item7.innerText = `Observações: ${comentario}`;
  
  return  novoFormulario.appendChild(item1),
          novoFormulario.appendChild(item2),
          novoFormulario.appendChild(item3),
          novoFormulario.appendChild(item4),
          novoFormulario.appendChild(item5),
          novoFormulario.appendChild(item6),
          novoFormulario.appendChild(item7);

}

/* Opção salvando tudo no localStorage presente no gitHub, porem não passava no requisito, pois os teste exige que as informações sejam adicionadas
no momento do clique, ou seja, junto com o evento */
