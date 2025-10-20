let metas = JSON.parse(localStorage.getItem("metas")) || [];

function salvarMetas() {
  localStorage.setItem("metas", JSON.stringify(metas));
}

function renderizarMetas() {
  const container = document.getElementById("lista-metas");
  container.innerHTML = "";

  metas.forEach((meta, index) => {
    const progressoPercent = Math.min((meta.progresso / meta.total) * 100, 100);

    const div = document.createElement("div");
    div.className = "meta-item";
    div.innerHTML = `
      <strong>${meta.nome}</strong><br>
      <small>${meta.progresso} / ${meta.total}</small>

      <div class="progress-bar">
        <div class="progress-fill"></div>
      </div>

      <div class="buttons">
        <button onclick="alterarMeta(${index}, 10)">+10</button>
        <button onclick="alterarMeta(${index}, 20)">+20</button>
        <button onclick="alterarMeta(${index}, 50)">+50</button>
        <button onclick="alterarMeta(${index}, -10)">-10</button>
        <button onclick="alterarMeta(${index}, -20)">-20</button>
      </div>

      <button class="delete" onclick="removerMeta(${index})">🗑️ Apagar</button>
    `;
    container.appendChild(div);

    // 💫 Força a animação acontecer após inserção
    const fill = div.querySelector(".progress-fill");
    setTimeout(() => {
      fill.style.width = `${progressoPercent}%`;
      if (progressoPercent >= 100) fill.classList.add("complete");
      else fill.classList.remove("complete");
    }, 50);
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

function alterarMeta(index, valor) {
  if (!metas[index]) return;

  metas[index].progresso = Math.max(0, Math.min(metas[index].total, metas[index].progresso + valor));
  salvarMetas();
  renderizarMetas();

  if (metas[index].progresso >= metas[index].total) {
    alert(`🔥 Meta "${metas[index].nome}" concluída!`);
  }
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
