const textarea = document.getElementById("bloco-textarea");
textarea.value = localStorage.getItem("bloco") || "";
textarea.addEventListener("input", () => {
  localStorage.setItem("bloco", textarea.value);
});
