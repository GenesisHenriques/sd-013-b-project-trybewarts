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
// const respostas = document.querySelector('#respostas');

const radiosFamilia = document.getElementsByName('family');
let familiaEscolhida = '';
const conteudo = document.querySelectorAll('.subject');
const conteudoEscolhido = [];
const radiosAvaliacao = document.getElementsByName('rate');
let notaAvaliacao = '';
const main = document.querySelector('.main');
const formulario1 = document.querySelector('#evaluation-form');

const novoFormulario = document.createElement('form');
const item1 = document.createElement('p');
const item2 = document.createElement('p');
const item3 = document.createElement('p');
const item4 = document.createElement('p');
const item5 = document.createElement('p');
const item6 = document.createElement('p');
const item7 = document.createElement('p');

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

function obterRadioFamilia() {
  for (let i = 0; i < radiosFamilia.length; i += 1) {
    if (radiosFamilia[i].checked) {
      familiaEscolhida = radiosFamilia[i].value;
    }
  }
  return familiaEscolhida;
}

function obterMateriaEscolhida() {
  for (let i = 0; i < conteudo.length; i += 1) {
    if (conteudo[i].checked) {
      conteudoEscolhido.push(` ${conteudo[i].value}`);
    }
  }
  return conteudoEscolhido;
}

function obterAvaliacao() {
  for (let i = 0; i < radiosAvaliacao.length; i += 1) {
    if (radiosAvaliacao[i].checked) {
      notaAvaliacao = radiosAvaliacao[i].value;
    }
  }
  return notaAvaliacao;
}

function obterDadosFormulario() {
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const comentario = textarea.value;

  obterRadioFamilia();
  obterMateriaEscolhida();
  obterAvaliacao();

  item1.innerText = `Nome: ${nome} ${sobrenome}`;
  item2.innerText = `Email: ${email}`;
  item3.innerText = `Casa: ${casa}`;
  item4.innerText = `Família: ${familiaEscolhida}`;
  item5.innerText = `Matérias: ${conteudoEscolhido}`;
  item6.innerText = `Avaliação: ${notaAvaliacao}`;
  item7.innerText = `Observações: ${comentario}`;

  return item1, item2, item3, item4, item5, item6, item7;
}

function imprimirFormularioPreenchido() {
  obterDadosFormulario();

  formulario1.remove();
  novoFormulario.id = 'evaluation-form';
  main.append(novoFormulario);

  novoFormulario.appendChild(item1);
  novoFormulario.appendChild(item2);
  novoFormulario.appendChild(item3);
  novoFormulario.appendChild(item4);
  novoFormulario.appendChild(item5);
  novoFormulario.appendChild(item6);
  novoFormulario.appendChild(item7);
}

function interagirComFormulario(event) {
  event.preventDefault();/* cancela o evento, sem parar a sua execução, ou seja, faz com a página não seja recarregada, porem implementa o resto da função */
  imprimirFormularioPreenchido();
}
botaoEnviar.addEventListener('click', interagirComFormulario);
