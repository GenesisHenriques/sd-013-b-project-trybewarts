const loginBtn = document.getElementById('btn-login');

function canLogin(event) {
    const inputLogin = document.getElementById('input-login')
    const inputPasswrd = document.getElementById('input-password')
    if (inputLogin.value === 'tryber@teste.com' && inputPasswrd.value === '123456') {
        alert('Olá, Tryber!')
        event.preventDefault();
    } else {
    alert('Login ou senha inválidos.')
    event.preventDefault();
    }
}

loginBtn.addEventListener('click', canLogin);
