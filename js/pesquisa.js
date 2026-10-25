const campoBusca = document.getElementById("searchInput");

campoBusca.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  const termo = campoBusca.value.trim();
  if (termo) window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(termo);
});

// Atalho: "/" foca na busca
document.addEventListener("keydown", (e) => {
  const digitando = ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName);
  if (e.key === "/" && !digitando) {
    e.preventDefault();
    campoBusca.focus();
  }
});
