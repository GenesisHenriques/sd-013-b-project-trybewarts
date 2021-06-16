// Ínicio de Trecho de Código do Genesis
document.getElementById("btnLogin").addEventListener("click", function(event){
  event.preventDefault()
  validatingLogin();
});



function validatingLogin() {
  
  const login = document.getElementById('login');
  const password = document.getElementById('password');

  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}





// Fim de Trecho de Código do Genesis

// Inicio de Trecho de código do Alan

// Fim de Trecho de Código do Alan
