const btnLogin = document.getElementById('btnLogin');
const btnEnviar = document.getElementById('submit-btn');
const checkBotao = document.getElementById('agreement');
const areaMensagem = document.getElementById('textarea');
const quant = document.getElementById('counter');
const family = document.getElementsByClassName('family');
const conteudo = document.getElementsByClassName('subject');
const notas = document.getElementsByName('rate');

const nome = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');
let familia;
let nota;
const comentario = document.getElementById('textarea');

let botao = true;

function contador() {
  quant.textContent = 500 - areaMensagem.value.length;
}

function verificaLogin(event) {
  event.preventDefault();
  const inputLogin = document.getElementById('inputLogin').value;
  const inputSenha = document.getElementById('inputSenha').value;

  if (inputLogin === 'tryber@teste.com' && inputSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function liberaBotao() {
  botao = !botao;
  btnEnviar.disabled = botao;
}

function capturaConteudos() {
  const selecionados = document.getElementsByClassName('selecionado');
  const cont = [];
  for (let i = 0; i < selecionados.length; i += 1) {
    cont.push(selecionados[i].value);
  }
  return cont.join(', ');
}

function montaParagrafo(id, value) {
  const filho = document.createElement('p');
  filho.textContent = `${id}${value}`;
  return filho;
}

function transformaForm(event) {
  event.preventDefault();
  const conteudos = capturaConteudos();
  const formulario = document.getElementById('evaluation-form');
  const name = `${nome.value} ${lastName.value}`;
  formulario.innerHTML = '';
  formulario.appendChild(montaParagrafo('Nome: ', name));
  formulario.appendChild(montaParagrafo('Email: ', email.value));
  formulario.appendChild(montaParagrafo('Casa: ', house.value));
  formulario.appendChild(montaParagrafo('Família: ', familia));
  formulario.appendChild(montaParagrafo('Matérias: ', conteudos));
  formulario.appendChild(montaParagrafo('Avaliação: ', nota));
  formulario.appendChild(montaParagrafo('Observações: ', comentario.value));
}

function alteraFamila(event) {
  familia = event.target.value;
}

function alteraNota(event) {
  nota = event.target.value;
}

function adicionaConteudo(event) {
  const atual = event.target;
  atual.classList.toggle('selecionado');
}

function adicionaListener() {
  btnLogin.addEventListener('click', verificaLogin);
  checkBotao.addEventListener('click', liberaBotao);
  areaMensagem.addEventListener('keyup', contador);
  btnEnviar.addEventListener('click', transformaForm);
  for (let i = 0; i < family.length; i += 1) {
    family[i].addEventListener('click', alteraFamila);
  }

  for (let i = 0; i < notas.length; i += 1) {
    notas[i].addEventListener('click', alteraNota);
  }

  for (let i = 0; i < conteudo.length; i += 1) {
    conteudo[i].addEventListener('click', adicionaConteudo);
  }
}

window.onload = function load() {
  adicionaListener();
  btnEnviar.disabled = botao;
};
