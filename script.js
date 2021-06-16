let botaoEnviar = document.querySelector("#enviar");

function verificarLoginESenha() {
  let login = document.querySelector("#login");
  let loginValor = login.value;
  let senha = document.querySelector("#senha");
  let senhaValor = senha.value;

  if (loginValor == "tryber@teste.com" && senhaValor == "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
}

botaoEnviar.addEventListener("click", verificarLoginESenha);
