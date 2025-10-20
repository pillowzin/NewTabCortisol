// versiculos.js — usa misc/biblialivre.json local
const INTERVAL_MS =  2 * 60 * 60 * 1000; // 2 horas

const fallback = {
  titulo: "Offline",
  texto: "“O Senhor é o meu pastor; nada me faltará.” — Salmos 23:1",
  explicacao: "Não deu pra carregar a Bíblia agora, mas Deus continua falando contigo."
};

function fadeReplace(caixa, html) {
  caixa.style.transition = "opacity 300ms ease";
  caixa.style.opacity = 0;
  setTimeout(() => {
    caixa.innerHTML = html;
    caixa.style.opacity = 1;
  }, 320);
}

async function carregarBiblia() {
  if (window._bibliaCache) return window._bibliaCache;
  const resp = await fetch("misc/biblialivre.json");
  if (!resp.ok) throw new Error("Erro ao carregar Bíblia local");
  const data = await resp.json();
  window._bibliaCache = data;
  return data;
}

function escolherVersiculoAleatorio(biblia) {
  const livro = biblia[Math.floor(Math.random() * biblia.length)];
  const caps = Object.keys(livro.capitulos);
  const cap = caps[Math.floor(Math.random() * caps.length)];
  const versos = livro.capitulos[cap];
  const versiculo = versos[Math.floor(Math.random() * versos.length)];
  const textoLimpo = versiculo.replace(/^\(\d+\)\s*/, "").trim();

  return {
    livro: livro.nome,
    capitulo: parseInt(cap) + 1,
    texto: textoLimpo
  };
}

async function exibirVersiculoAleatorio() {
  const caixa = document.getElementById("versiculoAleatorio");
  if (!caixa) return;

  fadeReplace(caixa, `<div class="caixas-inicio"><p style="color:#ccc">Carregando...</p></div>`);

  try {
    const biblia = await carregarBiblia();
    const v = escolherVersiculoAleatorio(biblia);

    const html = `
      <div class="versiculo-box">
        <h2 class="versiculo-titulo">${v.livro} ${v.capitulo}</h2>
        <h3 class="versiculo-texto">“${v.texto}”</h3>
        <button class="botao-trocar" onclick="exibirVersiculoAleatorio()">🔁 Trocar versículo</button>
      </div>
    `;
    fadeReplace(caixa, html);
    localStorage.setItem("ultimoVersiculo", JSON.stringify(v));
  } catch (err) {
    console.error("Erro ao exibir versículo:", err);
    fadeReplace(
      caixa,
      `<div class="versiculo-box">
        <h2>${fallback.titulo}</h2>
        <h3 class="versiculo-texto">${fallback.texto}</h3>
        <p>${fallback.explicacao}</p>
        <button class="botao-trocar" onclick="exibirVersiculoAleatorio()">🔁 Tentar novamente</button>
      </div>`
    );
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const caixa = document.getElementById("versiculoAleatorio");
  if (!caixa) return;

  const last = localStorage.getItem("ultimoVersiculo");
  if (last) {
    const v = JSON.parse(last);
    caixa.innerHTML = `
      <div class="versiculo-box">
        <h2 class="versiculo-titulo">${v.livro} ${v.capitulo}</h2>
        <h3 class="versiculo-texto">“${v.texto}”</h3>
        <button class="botao-trocar" onclick="exibirVersiculoAleatorio()">🔁 Trocar versículo</button>
      </div>
    `;
  } else {
    await exibirVersiculoAleatorio();
  }

  setInterval(exibirVersiculoAleatorio, INTERVAL_MS);
});

window.exibirVersiculoAleatorio = exibirVersiculoAleatorio;
