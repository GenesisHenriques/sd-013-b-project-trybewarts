const handleSubmit = (event) => {
  event.preventDefault();

  const email = document.getElementById("email-login").value;
  const senha = document.getElementById("senha-login").value;

  if (email === "tryber@teste.com" && senha === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
};

document.getElementById("form-login").addEventListener("submit", handleSubmit);
