const loginButton = document.getElementById('login-button');
const login = document.getElementById('login');
const password = document.getElementById('password');
// const familyParent = document.getElementById('label-family');

loginButton.addEventListener('click', () => {
  if (login.value !== 'tryber@teste.com' && password.value !== 123456) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

// const sun2 = document.createElement('label');

// sun2.innerHTML = '<input type="radio" name="family" id="front-end" value="Frontend">Família Frontend';
// familyParent.appendChild(sun2);

// const sun3 = document.createElement('label');
// sun3.innerHTML = '<input type="radio" name="family" id="back-end" value = "Backend">Família Backend';
// familyParent.appendChild(sun3);

// const sun4 = document.createElement('label');
// sun4.innerHTML = '<input type="radio" name="family" id="full-stack" value="FullStack">Família FullStack';
// familyParent.appendChild(sun4);
