/*
fazer uma condição de login
quando apertar o botão deve ser a seguintes mensagens. Se for diferente
do padrão de email: 'tryber@teste.com' e senha: 123456, vai dar um alert afirmando
um erro 'Login ou senha inválidos.', se for positivo vai dar uma mensagem desse
tipo: 'Olá, Tryber!'
*/ 
    let botao = document.querySelector('#botao')
    botao.addEventListener('click', () => {
        let inputLogin = document.querySelector('#login').value;
        let inputSenha = document.querySelector('#senha').value;
        if(inputLogin === 'tryber@teste.com' && inputSenha === '123456') {
            window.alert("Olá, Tryber!");
        } else {
            window.alert("Login ou senha inválidos.");
        }
    });