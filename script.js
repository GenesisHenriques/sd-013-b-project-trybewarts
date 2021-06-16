const userEmail = document.querySelector("#input-email");
const userPass = document.querySelector("#input-pass");
const buttonLogin = document.querySelector("#input-login");

function validLogin() {
  if (userEmail.value !== "tryber@teste.com") {
    return false;
  }
  if (userPass.value !== "123456") {
    return false;
  }
  return true;
}

buttonLogin.addEventListener("click", (event) => {
  event.preventDefault();
  if (validLogin()) {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
});
