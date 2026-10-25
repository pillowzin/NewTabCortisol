// Edite aqui para adicionar, remover ou reordenar links.
const DESTAQUES = [
  { nome: "YouTube Music", desc: "Sua música",       url: "https://music.youtube.com", cor: "#ff0033" },
  { nome: "Claude",        desc: "Assistente de IA", url: "https://claude.ai",         cor: "#d97757" },
];

const GRUPOS = [
  {
    titulo: "Favoritos",
    itens: [
      { nome: "YouTube",   url: "https://youtube.com",        cor: "#ff0000" },
      { nome: "GitHub",    url: "https://github.com",         cor: "#8b949e" },
      { nome: "Chess.com", url: "https://chess.com",          cor: "#81b64c" },
      { nome: "Lichess",   url: "https://lichess.org",        cor: "#d9d9d9" },
      { nome: "Songsterr", url: "https://www.songsterr.com/", cor: "#38b0de" },
      { nome: "ChatGPT",   url: "https://chatgpt.com",        cor: "#10a37f" },
    ],
  },
  {
    titulo: "Redes sociais",
    itens: [
      { nome: "Instagram", url: "https://instagram.com",                cor: "#e1306c" },
      { nome: "Facebook",  url: "https://facebook.com",                 cor: "#1877f2" },
      { nome: "Discord",   url: "https://discord.com/channels/@me",     cor: "#5865f2" },
      { nome: "WhatsApp",  url: "https://web.whatsapp.com/",            cor: "#25d366" },
    ],
  },
];

function criarIcone(item) {
  const span = document.createElement("span");
  span.className = "icone";
  const img = new Image();
  img.alt = "";
  img.src = "https://www.google.com/s2/favicons?domain=" + new URL(item.url).hostname + "&sz=128";
  // se o ícone não carregar, mostra a inicial do nome
  img.onerror = () => { img.remove(); span.textContent = item.nome[0]; };
  span.appendChild(img);
  return span;
}

function criarLink(item, classe) {
  const a = document.createElement("a");
  a.className = classe;
  a.href = item.url;
  a.style.setProperty("--c", item.cor);
  a.appendChild(criarIcone(item));
  return a;
}

const boxDestaques = document.getElementById("destaques");
DESTAQUES.forEach((item) => {
  const a = criarLink(item, "destaque");
  const texto = document.createElement("div");
  texto.innerHTML = "<strong></strong><span class='desc'></span>";
  texto.querySelector("strong").textContent = item.nome;
  texto.querySelector(".desc").textContent = item.desc;
  a.appendChild(texto);
  boxDestaques.appendChild(a);
});

const boxGrupos = document.getElementById("grupos");
GRUPOS.forEach((grupo) => {
  const sec = document.createElement("section");
  sec.className = "grupo";
  const h3 = document.createElement("h3");
  h3.textContent = grupo.titulo;
  const tiles = document.createElement("div");
  tiles.className = "tiles";
  grupo.itens.forEach((item) => {
    const a = criarLink(item, "tile");
    a.appendChild(document.createTextNode(item.nome));
    tiles.appendChild(a);
  });
  sec.append(h3, tiles);
  boxGrupos.appendChild(sec);
});
