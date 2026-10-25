(function () {
  // Mesma chave de antes, então suas metas atuais continuam aparecendo
  let metas = [];
  try { metas = JSON.parse(localStorage.getItem("metas")) || []; } catch (e) { metas = []; }

  const lista = document.getElementById("lista-metas");
  const inputNome = document.getElementById("nomeMeta");
  const inputTotal = document.getElementById("valorMaximo");

  const ICONE_LIXO =
    '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/></svg>';

  function salvar() { localStorage.setItem("metas", JSON.stringify(metas)); }

  function botao(texto, aoClicar, classe) {
    const b = document.createElement("button");
    if (classe) b.className = classe;
    b.textContent = texto;
    b.addEventListener("click", aoClicar);
    return b;
  }

  function alterar(i, valor) {
    const m = metas[i];
    if (!m) return;
    m.progresso = Math.max(0, Math.min(m.total, m.progresso + valor));
    salvar();
    renderizar();
  }

  function remover(i) {
    if (!confirm("Tem certeza que quer apagar essa meta?")) return;
    metas.splice(i, 1);
    salvar();
    renderizar();
  }

  function renderizar() {
    lista.innerHTML = "";
    metas.forEach((m, i) => {
      const pct = Math.min((m.progresso / m.total) * 100, 100);

      const item = document.createElement("div");
      item.className = "meta-item" + (pct >= 100 ? " concluida" : "");

      const topo = document.createElement("div");
      topo.className = "meta-topo";
      const nome = document.createElement("strong");
      nome.textContent = m.nome;
      const contador = document.createElement("small");
      contador.textContent = m.progresso + " / " + m.total;
      topo.append(nome, contador);

      const barra = document.createElement("div");
      barra.className = "progress-bar";
      const fill = document.createElement("div");
      fill.className = "progress-fill";
      barra.appendChild(fill);

      const acoes = document.createElement("div");
      acoes.className = "meta-acoes";
      [10, 20, 50, -10, -20].forEach((v) =>
        acoes.appendChild(botao((v > 0 ? "+" : "−") + Math.abs(v), () => alterar(i, v)))
      );
      const lixo = botao("", () => remover(i), "apagar");
      lixo.innerHTML = ICONE_LIXO;
      lixo.setAttribute("aria-label", "Apagar meta");
      acoes.appendChild(lixo);

      item.append(topo, barra, acoes);
      lista.appendChild(item);

      // anima a barra depois de inserida
      requestAnimationFrame(() => { fill.style.width = pct + "%"; });
    });
  }

  function adicionar() {
    const nome = inputNome.value.trim();
    const total = parseInt(inputTotal.value, 10);
    if (!nome || isNaN(total) || total <= 0) return;
    metas.push({ nome, total, progresso: 0 });
    salvar();
    renderizar();
    inputNome.value = "";
    inputTotal.value = "";
  }

  document.getElementById("btnAddMeta").addEventListener("click", adicionar);
  [inputNome, inputTotal].forEach((el) =>
    el.addEventListener("keydown", (e) => { if (e.key === "Enter") adicionar(); })
  );

  renderizar();
})();
