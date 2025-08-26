// Função de pesquisa
function searchBooks() {
  const input = document.querySelector(".search-box input").value.toLowerCase();
  const books = document.querySelectorAll(".book-card");

  books.forEach((book) => {
    const title = book.querySelector("p").textContent.toLowerCase();
    if (title.includes(input)) {
      book.style.display = "flex"; // mostra
    } else {
      book.style.display = "none"; // esconde
    }
  });
}

// Funções de navegação simuladas
function openPage(page) {
  if (page === "historico") {
    window.location.href = "historico.html";
  } else if (page === "avaliacoes") {
    window.location.href = "avaliacoes.html";
  } else if (page === "desejos") {
    window.location.href = "desejos.html";
  }
}
