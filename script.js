const loginButton = document.querySelector('.Enter');
loginButton.addEventListener('click', function () {
    const login = document.querySelector('.Login');
    const password = document.querySelector('.Password');
    let correctLogin = 'tryber@teste.com';
    let correctPassword = '123456';
    if (login.value === correctLogin && password.value === correctPassword) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.'); 
    }
    
});
