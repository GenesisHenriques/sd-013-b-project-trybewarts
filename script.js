const userDefault = 'tryber@test.com';
const passwordDefault = '123456';
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

counter.innerText = textarea.maxLength;

/* ________________________LOGIN________________________ */
function login() {
    const user = document.getElementsByName('user')[0].value;
    const password = document.getElementsByName('password')[0].value;

    if (user != userDefault || password != passwordDefault) {
        alert('Login ou senha inválidos.');
    } else {
        alert('Olá, Tryber!');
    }
}

const buttonEnter = document.getElementById('enter');
buttonEnter.addEventListener('click', login);

/* ________________________CONTADOR DE CARACTERES________________________ */
function count() {
    const characters = textarea.value.length;
    const maxlenght = textarea.maxLength;
    const remaining = maxlenght - characters;
    counter.innerText = remaining;
}

textarea.addEventListener('input', count);
