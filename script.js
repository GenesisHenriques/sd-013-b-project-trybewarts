const botaoEnviar = document.querySelector("#enviar");

function verificarLoginESenha() {
  const login = document.querySelector("#login");
  const loginValor = login.value;
  const senha = document.querySelector("#senha");
  const senhaValor = senha.value;

  if (loginValor === "tryber@teste.com" && senhaValor === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
}

botaoEnviar.addEventListener("click", verificarLoginESenha);
