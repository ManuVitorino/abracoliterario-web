function fazerLogin() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  if (email === "" || senha === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    alert("Tentando fazer login...");
  }
}

function irParaCadastro() {
  window.location.href = "cadastro.html";
}
