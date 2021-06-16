//Padrão email e senha ao clicar no botão

function pattern() {
  let button = document.getElementById('button');
  button.addEventListener('click', function(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      alert('Olá, Tryber!')
    } 
    if (email.value !== 'tryber@teste.com' && password.value !== '123456') {
      alert('Login ou senha inválidos.')
    }
  })
}
pattern()