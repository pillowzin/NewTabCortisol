// central
import './relogio.js';
import './boasVindas.js';
import './pesquisa.js';
import './notas.js';
import './metas.js';
import { adicionarMeta, alterarMeta, removerMeta } from './metas.js';

// Expõe no escopo global para funcionar com onclick
window.adicionarMeta = adicionarMeta;
window.alterarMeta = alterarMeta;
window.removerMeta = removerMeta;

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
