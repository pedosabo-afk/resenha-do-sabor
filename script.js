/**
 * Script para gerenciar o convite online - Resenha do Sabor
 * Versão: 2.0 - Com contagem corrigida
 */

// Configurações do evento - Data testando com 6 meses no futuro
const CONFIG_EVENTO = {
    nome: 'Resenha do Sabor',
    // Pegando data dinâmica: hoje + 180 dias
    data: new Date(new Date().getTime() + (180 * 24 * 60 * 60 * 1000)).getTime(),
    localizacao: 'https://maps.app.goo.gl/u46F6BX55dYucyVS9',
    whatsappNumber: '5561998349595',
    whatsappMessage: 'Presença confirmada com sucesso! ✅ Além de comparecer, ainda vou levar minha própria bebida porque tenho acesso à água potável… e faço parte da evolução da espécie 👏🍻”'
};

console.log('╔════════════════════════════════════════╗');
console.log('║  RESENHA DO SABOR - CONVITE ONLINE    ║');
console.log('╚════════════════════════════════════════╝');
console.log('📅 Data do Evento:', new Date(CONFIG_EVENTO.data).toLocaleString('pt-BR'));
console.log('⏰ Hora Atual:', new Date().toLocaleString('pt-BR'));
console.log('✅ Script v2.0 carregado com sucesso!');

// Elementos do DOM
const cardConvite = document.getElementById('cardConvite');
const overlay = document.getElementById('overlay');
const btnAbrir = document.getElementById('btnAbrir');
const telaInicial = document.getElementById('telaInicial');

// Variáveis de estado
let conviteAberto = false;
let intervaloContagem = null;

/**
 * Abre o convite com animação
 */
function abrirConvite() {
    console.log('🎉 Abrindo convite...');
    conviteAberto = true;
    
    // Mostrar card e overlay
    cardConvite.classList.add('ativo');
    overlay.classList.add('ativo');
    
    // Esconder botão inicial
    btnAbrir.style.display = 'none';
    
    // Iniciar contagem regressiva
    iniciarContagemRegressiva();
}

/**
 * Fecha o convite com animação
 */
function fecharConvite() {
    console.log('❌ Fechando convite...');
    conviteAberto = false;
    
    // Remover classes ativas
    cardConvite.classList.remove('ativo');
    overlay.classList.remove('ativo');
    
    // Mostrar botão inicial
    btnAbrir.style.display = 'block';
    
    // Parar contagem regressiva
    if (intervaloContagem) {
        clearInterval(intervaloContagem);
    }
}

/**
 * Inicia a contagem regressiva até o evento
 */
function iniciarContagemRegressiva() {
    console.log('⏱️  Iniciando contagem regressiva...');
    
    // Atualizar imediatamente
    atualizarContagem();
    
    // Atualizar a cada segundo
    intervaloContagem = setInterval(atualizarContagem, 1000);
}

/**
 * Atualiza os valores da contagem regressiva
 */
function atualizarContagem() {
    const agora = new Date().getTime();
    const diferenca = CONFIG_EVENTO.data - agora;
    
    if (diferenca <= 0) {
        // Evento já começou
        diasEl.textContent = '00';
        horasEl.textContent = '00';
        minutosEl.textContent = '00';
        segundosEl.textContent = '00';
        
        if (intervaloContagem) {
            clearInterval(intervaloContagem);
        }
        console.log('🎊 Evento começou!');
        return;
    }
    
    // Calcular tempo
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
    // Atualizar DOM
    diasEl.textContent = String(dias).padStart(2, '0');
    horasEl.textContent = String(horas).padStart(2, '0');
    minutosEl.textContent = String(minutos).padStart(2, '0');
    segundosEl.textContent = String(segundos).padStart(2, '0');
    
    // Debug a cada 10 segundos
    if (segundos % 10 === 0 && segundos === 0) {
        console.log(`⏳ Contagem: ${dias}d ${horas}h ${minutos}m`);
    }
}

/**
 * Confirma presença via WhatsApp
 */
function confirmarPresencaWhatsApp() {
    const numero = CONFIG_EVENTO.whatsappNumber;
    const mensagem = encodeURIComponent(CONFIG_EVENTO.whatsappMessage);
    const urlWhatsApp = `https://wa.me/${numero}?text=${mensagem}`;
    
    console.log('💬 Abrindo WhatsApp...');
    window.open(urlWhatsApp, '_blank');
}

/**
 * Evento ao carregar a página
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 Página carregada!');
    
    // Deixar tela inicial visível
    telaInicial.style.display = 'flex';
    
    // Listeners
    overlay.addEventListener('click', fecharConvite);
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && conviteAberto) {
            fecharConvite();
        }
    });
});

// Log final
console.log('✨ Sistema de contagem regressiva pronto!');
