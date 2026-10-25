function saudacaoPorHora(h) {
  if (h < 5) return "Boa madrugada";
  if (h < 12) return "Bom dia";
  if (h < 18) return "Boa tarde";
  return "Boa noite";
}

function atualizarRelogio() {
  const agora = new Date();
  document.getElementById("horaAtual").textContent =
    agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  document.getElementById("dataAtual").textContent =
    agora.toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long" });
  document.getElementById("saudacao").textContent = saudacaoPorHora(agora.getHours()) + ", Jacob";
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
