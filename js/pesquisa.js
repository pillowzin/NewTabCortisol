document.getElementById("searchInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const termo = this.value.trim();
    if (termo) window.open(`https://www.google.com/search?q=${encodeURIComponent(termo)}`, "_blank");
  }
});
