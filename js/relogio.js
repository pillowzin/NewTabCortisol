function atualizarRelogio() {
  const agora = new Date();
  const hora = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const data = agora.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' });
  document.querySelectorAll('#horaAtual').forEach(span => span.textContent = hora);
  document.getElementById('dataAtual').textContent = data;
}
setInterval(atualizarRelogio, 1000);
document.addEventListener('DOMContentLoaded', atualizarRelogio);
