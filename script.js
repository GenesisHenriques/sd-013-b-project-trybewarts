const login = document.querySelector('#login');
const password = document.querySelector('#password');
const bttn = document.querySelector('#bttn');

function validEmail() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
<<<<<<< HEAD
     alert('Olá, Tryber!');
  } if ((login.value !== 'tryber@teste.com' || password.value !== '123456')) {
    alert('Login ou senha inválidos.');
}
=======
    alert('Olá, Tryber!');
  }
  if (login.value !== 'tryber@teste.com' || password.value !== '123456') {
    alert('Login ou senha inválidos.');
  }
>>>>>>> bf9bfa7eae07304020d3366b5d45d4d26ed97152
}

bttn.addEventListener('click', validEmail);
