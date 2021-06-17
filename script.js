// 1. Crie uma barra verde na parte superior da página

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
confirmButton.onclick = function pegarLogin() {
  const confirmUser = userInput.value;
  const confirmPass = passInput.value;
  if (confirmUser === 'tryber@teste.com' && confirmPass === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
};

// 5. Adicione um formulário no corpo da página, posicionado ao lado esquerdo
const main = document.createElement('main');
document.body.appendChild(main);

const formEvaluator = document.createElement('form');
formEvaluator.id = 'evaluation-form';
formEvaluator.innerText = 'forms';
main.appendChild(formEvaluator);

// 10. Alinhe os campos de 'Nome' e 'Sobrenome' para que fiquem em linha
const div1Forms = document.createElement('div');
div1Forms.classList = 'div1Forms';
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
const selectLabel = document.createElement('label');
selectLabel.htmlFor = 'house';
selectLabel.innerText = 'Casa:';
div1Forms.appendChild(selectLabel);

const select = document.createElement('select');
select.id = 'house';
div1Forms.appendChild(select);

const opitonGitnória = document.createElement('option');
opitonGitnória.value = 'Gitnória';
opitonGitnória.innerText = 'Gitnória';
opitonGitnória.id = 'gitnoria-house';
select.appendChild(opitonGitnória);

const opitonReactpuff = document.createElement('option');
opitonReactpuff.value = 'Reactpuff';
opitonReactpuff.innerText = 'Reactpuff';
opitonReactpuff.id = 'reactpuff-house';
select.appendChild(opitonReactpuff);

const opitonCorvinode = document.createElement('option');
opitonCorvinode.value = 'Corvinode';
opitonCorvinode.innerText = 'Corvinode';
opitonCorvinode.id = 'corvinode-house';
select.appendChild(opitonCorvinode);

const opitonPytherina = document.createElement('option');
opitonPytherina.value = 'Pytherina';
opitonPytherina.innerText = 'Pytherina';
opitonPytherina.id = 'pytherina-house';
select.appendChild(opitonPytherina);

// 12. Crie um campo de entrada para qual família a pessoa estudante se identifica
const div2Forms = document.createElement('div');
div2Forms.classList = 'div2Forms';
formEvaluator.appendChild(div2Forms);

const div2Child1 = document.createElement('div');
div2Child1.classList = 'div2Child1';
div2Forms.appendChild(div2Child1);

const radioTitle = document.createElement('div');
radioTitle.innerText = 'Qual sua família?';
radioTitle.id = 'label-family';
div2Child1.appendChild(radioTitle);

const ul = document.createElement('ul');
ul.id = 'ul-lista';
div2Child1.appendChild(ul);

for (let index = 0; index < 3; index += 1) {
  const li = document.createElement('li');
  ul.appendChild(li);
}

const li1 = document.getElementsByTagName('li')[0];
const radioInput1 = document.createElement('input');
radioInput1.id = 'Frontend';
radioInput1.type = 'radio';
radioInput1.value = 'Frontend';
radioInput1.name = 'family';
li1.appendChild(radioInput1);

const labelInput1 = document.createElement('label');
labelInput1.htmlFor = 'Frontend';
labelInput1.innerText = 'Família Frontend';
li1.appendChild(labelInput1);

const li2 = document.getElementsByTagName('li')[1];
const radioInput2 = document.createElement('input');
radioInput2.id = 'Backend';
radioInput2.type = 'radio';
radioInput2.value = 'Backend';
radioInput2.name = 'family';
li2.appendChild(radioInput2);

const labelInput2 = document.createElement('label');
labelInput2.htmlFor = 'Backend';
labelInput2.innerText = 'Família Backend';
li2.appendChild(labelInput2);

const li3 = document.getElementsByTagName('li')[2];
const radioInput3 = document.createElement('input');
radioInput3.id = 'FullStack';
radioInput3.type = 'radio';
radioInput3.value = 'FullStack';
radioInput3.name = 'family';
li3.appendChild(radioInput3);

const labelInput3 = document.createElement('label');
labelInput3.htmlFor = 'FullStack';
labelInput3.innerText = 'Família FullStack';
li3.appendChild(labelInput3);

// 13. Crie campos de entrada do tipo 'checkbox' contendo seis opções
const div2Child2 = document.createElement('div');
div2Child2.classList = 'div2Child2';
div2Forms.appendChild(div2Child2);

const checkboxTitle = document.createElement('div');
checkboxTitle.innerText = 'Qual conteúdo você está com mais vontade de aprender?';
checkboxTitle.id = 'label-content';
div2Child2.appendChild(checkboxTitle);

const ulDiv2 = document.createElement('ul');
ulDiv2.id = 'uldiv2-lista';
div2Child2.appendChild(ulDiv2);

for (let index = 0; index < 6; index += 1) {
  const liDiv2 = document.createElement('li');
  liDiv2.classList = 'liDiv2';
  ulDiv2.appendChild(liDiv2);
}
//
const li0Div2 = document.querySelectorAll('.liDiv2')[0];
const checkInput1 = document.createElement('input');
checkInput1.classList = 'subject';
checkInput1.type = 'checkbox';
checkInput1.id = 'HoFs';
checkInput1.value = 'HoFs';
li0Div2.appendChild(checkInput1);

const labelCheck1 = document.createElement('label');
labelCheck1.htmlFor = 'HoFs';
labelCheck1.innerText = 'HoFs';
li0Div2.appendChild(labelCheck1);

//
const li1Div2 = document.querySelectorAll('.liDiv2')[1];
const checkInput2 = document.createElement('input');
checkInput2.classList = 'subject';
checkInput2.type = 'checkbox';
checkInput2.id = 'Jest';
checkInput2.value = 'Jest';
li1Div2.appendChild(checkInput2);

const labelCheck2 = document.createElement('label');
labelCheck2.htmlFor = 'Jest';
labelCheck2.innerText = 'Jest';
li1Div2.appendChild(labelCheck2);

//
const li2Div2 = document.querySelectorAll('.liDiv2')[2];
const checkInput3 = document.createElement('input');
checkInput3.classList = 'subject';
checkInput3.type = 'checkbox';
checkInput3.id = 'Promises';
checkInput3.value = 'Promises';
li2Div2.appendChild(checkInput3);

const labelCheck3 = document.createElement('label');
labelCheck3.htmlFor = 'Promises';
labelCheck3.innerText = 'Promises';
li2Div2.appendChild(labelCheck3);

//
const li3Div2 = document.querySelectorAll('.liDiv2')[3];
const checkInput4 = document.createElement('input');
checkInput4.classList = 'subject';
checkInput4.type = 'checkbox';
checkInput4.id = 'React';
checkInput4.value = 'React';
li3Div2.appendChild(checkInput4);

const labelCheck4 = document.createElement('label');
labelCheck4.htmlFor = 'React';
labelCheck4.innerText = 'React';
li3Div2.appendChild(labelCheck4);

//
const li4Div2 = document.querySelectorAll('.liDiv2')[4];
const checkInput5 = document.createElement('input');
checkInput5.classList = 'subject';
checkInput5.type = 'checkbox';
checkInput5.id = 'SQL';
checkInput5.value = 'SQL';
li4Div2.appendChild(checkInput5);

const labelCheck5 = document.createElement('label');
labelCheck5.htmlFor = 'SQL';
labelCheck5.innerText = 'SQL';
li4Div2.appendChild(labelCheck5);

//
const li5Div2 = document.querySelectorAll('.liDiv2')[5];
const checkInput6 = document.createElement('input');
checkInput6.classList = 'subject';
checkInput6.type = 'checkbox';
checkInput6.id = 'Python';
checkInput6.value = 'Python';
li5Div2.appendChild(checkInput6);

const labelCheck6 = document.createElement('label');
labelCheck6.htmlFor = 'Python';
labelCheck6.innerText = 'Python';
li5Div2.appendChild(labelCheck6);
