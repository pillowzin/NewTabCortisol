document.getElementById("searchInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const termo = this.value.trim();
    if (termo) window.location.href = "https://www.google.com/search?q=" + termo;
  }
});
