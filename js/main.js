// central
import './relogio.js';
import './boasVindas.js';
import './pesquisa.js';
import './notas.js';
import './metas.js';
import './versiculos.js'

function abrirPDF(caminho) {
  const iframe = document.getElementById("iframePDF");
  iframe.src = caminho;
  iframe.style.display = "block";
}
window.abrirPDF = abrirPDF;
