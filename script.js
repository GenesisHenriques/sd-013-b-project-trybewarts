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

function salvarRespostas() {
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  let radiosFamilia = document.getElementsByName('family');
  let familiaEscolhida = '';
  let conteudo = document.querySelectorAll('.subject');
  let conteudoEscolhido = [];
  let radiosAvaliacao = document.getElementsByName('rate');
  let notaAvaliacao = '';
  comentario = textarea.value;

  for (let i = 0; i < radiosFamilia.length; i += 1) {
    if (radiosFamilia[i].checked) {
      familiaEscolhida = radiosFamilia[i].value;
    }
  }

  for (let i = 0; i < conteudo.length; i += 1) {
    if (conteudo[i].checked) {
      conteudoEscolhido.push(conteudo[i].value);
    }
  }

  for (let i = 0; i < radiosAvaliacao.length; i += 1) {
    if (radiosAvaliacao[i].checked) {
      notaAvaliacao = radiosAvaliacao[i].value;
    }
  }

  localStorage.setItem('nome', nome);
  localStorage.setItem('sobrenome', sobrenome);
  localStorage.setItem('email', email);
  localStorage.setItem('casa', casa);
  localStorage.setItem('familia', familiaEscolhida);
  localStorage.setItem('conteudo', conteudoEscolhido);
  localStorage.setItem('avaliacao', notaAvaliacao);
  localStorage.setItem('observacao', comentario);

}
botaoEnviar.addEventListener('click', salvarRespostas);

window.onload = function () {

  if (localStorage.length != 0) {
    let formulario1 = document.querySelector('#evaluation-form');
    formulario1.remove();

    let main = document.querySelector('.main');
    let novoFormulario = document.createElement('form');

    novoFormulario.id = 'evaluation-form';
    main.append(novoFormulario);

    let item1 = document.createElement('p');
    let item2 = document.createElement('p');
    let item4 = document.createElement('p');
    let item5 = document.createElement('p');
    let item6 = document.createElement('p');
    let item7 = document.createElement('p');
    let item8 = document.createElement('p');

    item1.innerText = `Nome: ${localStorage.getItem('nome')} ${localStorage.getItem('sobrenome')}`;
    novoFormulario.append(item1);

    item2.innerText = `Email: ${localStorage.getItem('email')}`;
    novoFormulario.append(item2);

    item4.innerText = `Casa: ${localStorage.getItem('casa')}`;
    novoFormulario.append(item4);

    item5.innerText = `Família: ${localStorage.getItem('familia')}`;
    novoFormulario.append(item5);

    item6.innerText = `Matérias: ${localStorage.getItem('conteudo')}`;
    novoFormulario.append(item6);

    item7.innerText = `Avaliação: ${localStorage.getItem('avaliacao')}`;
    novoFormulario.append(item7);

    item8.innerText = `Observações: ${localStorage.getItem('observacao')}`;
    novoFormulario.append(item8);

  }
}
