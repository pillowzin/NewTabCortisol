const board = Chessboard("chessboard", {
  draggable: true,
  dropOffBoard: "snapback",
  position: "start",
  pieceTheme: "js/libs/img/chesspieces/{piece}.png",
});

document.getElementById("btnReiniciar").addEventListener("click", () => board.start());
document.getElementById("btnVirar").addEventListener("click", () => board.flip());
window.addEventListener("resize", () => { if (board.resize) board.resize(); });
