function cadastrar() {
  let email = document.getElementById("emailCadastro").value;
  let senha = document.getElementById("senhaCadastro").value;
  let nome = document.getElementById("nomeCadastro").value;

  if (email === "" || senha === "" || nome === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    alert("Cadastro realizado com sucesso!");
    // Aqui você pode futuramente redirecionar para a tela de login
    // window.location.href = "login.html";
  }
}
