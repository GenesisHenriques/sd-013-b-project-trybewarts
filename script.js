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

function generateRateButtons () {
  const rateDiv = document.getElementsByClassName('rate-div');
  for (let index = 0; index < 10; index += 1) {
    const radioBtn = document.createElement('input');
    radioBtn.setAttribute('type','radio');
    radioBtn.setAttribute('name','rate');
    radioBtn.setAttribute('value', index);
    rateDiv[0].appendChild(radioBtn);
  }
}

// Fim de Trecho de Código do Alan
