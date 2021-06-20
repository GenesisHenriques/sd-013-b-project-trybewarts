function alerta() {
    let login = document.querySelector('#login');
    let password = document.querySelector('#password');
    let button = document.querySelector('#button');
    button.addEventListener('click', () => {
        if (login.value === 'tryber@teste.com' && password.value === '123456') {
            alert("Olá, Tryber!")
        } else {
            alert("Login ou senha inválidos.")
        }
    });
}
alerta();