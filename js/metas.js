let metas = JSON.parse(localStorage.getItem("metas")) || [];

function salvarMetas() {
  localStorage.setItem("metas", JSON.stringify(metas));
}

function renderizarMetas() {
  const container = document.getElementById("lista-metas");
  container.innerHTML = "";

  metas.forEach((meta, index) => {
    const div = document.createElement("div");
    div.className = "meta-item";
    div.innerHTML = `
      <strong>${meta.nome}</strong> (${meta.progresso}/${meta.total})
      <button onclick="alterarMeta(${index}, -1)">-</button>
      <button onclick="alterarMeta(${index}, 1)">+</button>
      <button onclick="removerMeta(${index})" style="background:#900; color:#fff;">🗑️</button>
    `;
    container.appendChild(div);
  });
}

function adicionarMeta() {
  const nome = document.getElementById("nomeMeta").value.trim();
  const total = parseInt(document.getElementById("valorMaximo").value);
  if (!nome || isNaN(total) || total <= 0) return;

  metas.push({ nome, total, progresso: 0 });
  salvarMetas();
  renderizarMetas();

  document.getElementById("nomeMeta").value = "";
  document.getElementById("valorMaximo").value = "";
}

function alterarMeta(index, delta) {
  if (!metas[index]) return;
  metas[index].progresso = Math.max(0, Math.min(metas[index].total, metas[index].progresso + delta));
  salvarMetas();
  renderizarMetas();
}

function removerMeta(index) {
  if (confirm("Tem certeza que quer apagar essa meta?")) {
    metas.splice(index, 1);
    salvarMetas();
    renderizarMetas();
  }
}

document.addEventListener("DOMContentLoaded", renderizarMetas);
export { adicionarMeta, alterarMeta, removerMeta };
