// Login
const login = document.getElementById("login").value;
const pwd = document.getElementById("senha").value;
const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (login !== "" && pwd === "") {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
});
