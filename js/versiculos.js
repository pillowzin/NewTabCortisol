const versiculos = [
  {
    titulo: "Posição Inicial",
    texto: "“Bem-aventurados os pobres de espírito, porque deles é o Reino dos céus.” — Mateus 5:3",
    explicacao: "Você é limitado, fraco, propenso a cair. Mas também é escolhido, amado e chamado pra avançar."
  },
  {
    titulo: "Foco Diário",
    texto: "“Basta a cada dia o seu próprio mal.” — Mateus 6:34",
    explicacao: "Não tente resolver tudo de uma vez. Avance um passo por vez."
  },
  {
    titulo: "Defesa Ativa",
    texto: "“Sobre tudo o que se deve guardar, guarda o teu coração.” — Provérbios 4:23",
    explicacao: "Mapeie o que te enfraquece: vícios, distrações, solidão."
  },
  {
    titulo: "Compromisso com a jornada",
    texto: "“Combati o bom combate, acabei a carreira, guardei a fé.” — 2 Timóteo 4:7",
    explicacao: "Você não tá tentando impressionar ninguém. Você tá indo até o fim pra ser achado fiel."
  },
  {
    titulo: "Fé em meio à pressão",
    texto: "“Não fostes vós que me escolhestes a mim; pelo contrário, eu vos escolhi a vós.” — João 15:16",
    explicacao: "Mesmo que você se sinta fraco ou sujo, Ele continua te chamando."
  }
];

function sortearVersiculo() {
  const caixa = document.getElementById("versiculoAleatorio");
  const item = versiculos[Math.floor(Math.random() * versiculos.length)];
  caixa.innerHTML = `
    <div class="caixas-inicio">
      <h2>${item.titulo}</h2>
      <h3 class="versiculo">${item.texto}</h3>
      <p>${item.explicacao}</p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", sortearVersiculo);