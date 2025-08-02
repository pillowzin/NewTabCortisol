// central
import './relogio.js';
import './boasVindas.js';
import './pesquisa.js';
import './notas.js';
import './metas.js';
import './versiculos.js'

function abrirPDF(pdfPath) {
  const pdfContainer = document.getElementById('pdf-container');
  pdfContainer.innerHTML = `
    <iframe src="${pdfPath}" width="100%" height="500px" style="border: none;"></iframe>
  `;
}

const board = Chessboard('chessboard', {
  draggable: true,
  dropOffBoard: 'snapback',
  position: 'start',
  pieceTheme: 'js/libs/img/chesspieces/{piece}.png'
});