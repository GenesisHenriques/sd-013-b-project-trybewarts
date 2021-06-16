// 1. Crie uma barra verde na parte superior da página

const body = document.getElementsByTagName('body');
const header = document.createElement('header');
header.classList = 'header';
header.style.backgroundColor = 'rgb(50, 167, 145)';
document.body.appendChild(header);


// 2. Adicione o logotipo da Trybewarts com a classe trybewarts-header-logo no canto esquerdo da barra superior

const imgHeaderLogo = document.createElement('img');
header.appendChild(imgHeaderLogo);
imgHeaderLogo.classList = 'trybewarts-header-logo';
imgHeaderLogo.src = 'images/trybewarts-header-logo.svg';

// 4. Crie um título com o texto 'Trybewarts' centralizado dentro do 'Header'
const h1 = document.createElement('h1');
h1.id = 'trybewarts-header-title';
h1.innerText = 'Trybewarts';
header.appendChild(h1);

// 3. 3. Acrescente um formulário de autenticação no canto direito da barra superior contendo os inputs de login, de senha e um botão de entrar
const formsHeader = document.createElement('form');
formsHeader.classList = 'trybewarts-login';
header.appendChild(formsHeader);

const userInput = document.createElement('input');
userInput.placeholder = 'Login';
formsHeader.appendChild(userInput);

const passInput = document.createElement('input');
passInput.placeholder = 'Senha';
formsHeader.appendChild(passInput);

const confirmButton = document.createElement('button');
confirmButton.innerText = 'logar';
formsHeader.appendChild(confirmButton);

// O formulário deve aceitar como padrão o login 'tryber@teste.com' e a senha '123456'
confirmButton.onclick = function() {
  let confirmUser = userInput.value;
  let confirmPass = passInput.value;
  if (confirmUser === 'tryber@teste.com' && confirmPass === '123456'){
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

// 5. Adicione um formulário no corpo da página, posicionado ao lado esquerdo
const main = document.createElement('main');
document.body.appendChild(main);

const formEvaluator = document.createElement('form');
formEvaluator.id = 'evaluation-form';
main.appendChild(formEvaluator);


// 6. Faça com que o formulário do requisito 5 seja um container flex com o eixo principal vertical