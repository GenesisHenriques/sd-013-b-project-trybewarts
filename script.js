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
formEvaluator.innerText = 'forms';
main.appendChild(formEvaluator);

//10. Alinhe os campos de 'Nome' e 'Sobrenome' para que fiquem em linha
const div1Forms = document.createElement('div');
div1Forms.classList = 'div1Forms'
formEvaluator.appendChild(div1Forms);

// 6. Faça com que o formulário do requisito 5 seja um container flex com o eixo principal vertical

// 7. Adicione a logo da Trybewarts no lado direito da página
const imgFormsLogo = document.createElement('img');
imgFormsLogo.src = 'images/trybewarts-colored.svg';
imgFormsLogo.id = 'trybewarts-forms-logo';
main.appendChild(imgFormsLogo);

// 8.Acrescente no formulário os inputs de 'Nome:', 'Sobrenome:' e 'Email:'
const nomeInput = document.createElement('input');
nomeInput.id = 'input-name';
nomeInput.placeholder = 'Nome';
div1Forms.appendChild(nomeInput);

const sobrenomeInput = document.createElement('input');
sobrenomeInput.id = 'input-lastname';
sobrenomeInput.placeholder = 'Sobrenome';
div1Forms.appendChild(sobrenomeInput);

const emailInput = document.createElement('input');
emailInput.id = 'input-email';
emailInput.placeholder = 'Email';
div1Forms.appendChild(emailInput);

// 9. Crie um select 'Casa' contendo quatro options

const select = document.createElement('select');
select.id= 'house';
div1Forms.appendChild(select)

const opitonGitnória = document.createElement('option'); 
opitonGitnória.value = 'Gitnória';
opitonGitnória.innerText = 'Gitnória';
opitonGitnória.id = 'gitnoria-house';
select.appendChild(opitonGitnória);

const opitonReactpuff =document.createElement('option');
opitonReactpuff.value = 'Reactpuff';
opitonReactpuff.innerText = 'Reactpuff';
opitonReactpuff.id = 'reactpuff-house';
select.appendChild(opitonReactpuff);

const opitonCorvinode =document.createElement('option');
opitonCorvinode.value = 'Corvinode';
opitonCorvinode.innerText = 'Corvinode';
opitonCorvinode.id = 'corvinode-house';
select.appendChild(opitonCorvinode);

const opitonPytherina =document.createElement('option');
opitonPytherina.value = 'Pytherina';
opitonPytherina.innerText = 'Pytherina';
opitonPytherina.id = 'pytherina-house';
select.appendChild(opitonPytherina);

//12. Crie um campo de entrada para qual família a pessoa estudante se identifica
const div2Forms = document.createElement('div');
div2Forms.classList = 'div2Forms'
formEvaluator.appendChild(div2Forms);

const div2Child1 = document.createElement('div');
div2Child1.classList = 'div2Child1';
div2Forms.appendChild(div2Child1);

const labelTitle = document.createElement('label');
labelTitle.innerText = 'Qual sua família?';
labelTitle.id = 'label-family'
div2Child1.appendChild(labelTitle);

const ul = document.createElement('ul');
labelTitle.appendChild(ul)
for (let index = 0; index < 3 ; index += 1) {
  const li = document.createElement('li');
  ul.appendChild(li);
}


const radioInput1 = document.createElement('input');
radioInput1.type = 'radio';
radioInput1.value = 'Frontend';
radioInput1.name = 'family';
labelTitle.appendChild(radioInput1)



const labelInput1 = document.createElement('label');
labelInput1.htmlFor = 'Frontend';
labelInput1.innerText = 'Família Frontend';
labelTitle.appendChild(labelInput1);



const div2Child2 = document.createElement('div');
div2Child2.classList = 'div2Child2';
div2Forms.appendChild(div2Child2);


