const texto = 'Bem-vindo!';
let index = 0;

function escreverTexto() {
  const el = document.getElementById('bemvindoTexto');
  if (index < texto.length) {
    el.textContent += texto.charAt(index++);
    setTimeout(escreverTexto, 120);
  } else {
    el.style.borderRight = 'none';
  }
}
document.addEventListener('DOMContentLoaded', escreverTexto);