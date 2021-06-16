const login = document.getElementById('input-login').value;
const senha = document.getElementById('input-senha').value;

function trybelogin (){
    if(login==true && senha==true){
        alert('Olá, Tryber!');
    }
    else{
        alert('Login ou senha inválidos');
    }
}