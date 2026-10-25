const textareaNotas = document.getElementById("bloco-textarea");
textareaNotas.value = localStorage.getItem("bloco") || "";
textareaNotas.addEventListener("input", () => {
  localStorage.setItem("bloco", textareaNotas.value);
});
