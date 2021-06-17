const defaultLogin = 'trybe@teste.com';
const defaultPassword = '123456';

const login = document.getElementById('login');
const password = document.getElementById('password');

const btnLogin = document.getElementById('btn-login');

const agreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

const commentSection = document.getElementById('textarea');
const counter = document.getElementById('counter');
let commentSize;

function validateLogin() {
  if ((login.value === defaultLogin) || (password.value === defaultPassword)) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', validateLogin);

agreement.addEventListener('click', () => { btnSubmit.toggleAttribute('disabled'); });

function commentCounter() {
  commentSize = commentSection.value;
  const input = commentSize.length;
  const sub = (500 - (input));
  counter.innerText = (sub);
}

commentSection.addEventListener('input', commentCounter);
