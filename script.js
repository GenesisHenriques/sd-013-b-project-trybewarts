const button = document.querySelector('.submit');

function loginAlert() {
    const loginInput = document.querySelector('.login');
    const passwordInput = document.querySelector('.password');

    if (loginInput.value == '' && passwordInput.value == '') {
        alert ('Login ou senha inválidos.');
    } else {
        alert ('Olá, Tryber!');
    }
}

button.addEventListener('click', loginAlert);

