/**
 * Script para gerenciar o convite online - Resenha do Sabor
 */

// Configurações do evento
const CONFIG_EVENTO = {
    nome: 'Resenha do Sabor',
    data: new Date('2026-06-20T19:00:00').getTime(),
    localizacao: 'https://maps.app.goo.gl/u46F6BX55dYucyVS9',
    whatsappNumber: '5585987654321', // Substitua pelo número correto com código do país
    whatsappMessage: 'Sabor, minha presença está confirmada para a Resenha do Sabor! 🎉'
};

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
    conviteAberto = true;
    
    // Mostrar card e overlay
    cardConvite.classList.add('ativo');
    overlay.classList.add('ativo');
    
    // Esconder botão inicial
    btnAbrir.style.display = 'none';
    
    // Iniciar contagem regressiva
    iniciarContagemRegressiva();
    
    // Reproduzir som (opcional)
    reproduzirSomAbertura();
}

/**
 * Fecha o convite com animação
 */
function fecharConvite() {
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
        document.getElementById('dias').textContent = '00';
        document.getElementById('horas').textContent = '00';
        document.getElementById('minutos').textContent = '00';
        document.getElementById('segundos').textContent = '00';
        
        if (intervaloContagem) {
            clearInterval(intervaloContagem);
        }
        return;
    }
    
    // Calcular tempo
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
    // Atualizar DOM com padStart para adicionar zero à esquerda
    document.getElementById('dias').textContent = String(dias).padStart(2, '0');
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
}

/**
 * Confirma presença via WhatsApp
 */
function confirmarPresencaWhatsApp() {
    const numero = CONFIG_EVENTO.whatsappNumber;
    const mensagem = encodeURIComponent(CONFIG_EVENTO.whatsappMessage);
    
    // URL do WhatsApp Web
    const urlWhatsApp = `https://wa.me/${numero}?text=${mensagem}`;
    
    // Abrir em nova aba
    window.open(urlWhatsApp, '_blank');
}

/**
 * Reproduz som de abertura (opcional)
 */
function reproduzirSomAbertura() {
    try {
        // Som ativado apenas se desejado
    } catch (error) {
        console.log('Não foi possível reproduzir som');
    }
}

/**
 * Evento ao carregar a página
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada. Iniciando...');
    
    // Deixar tela inicial visível por padrão
    telaInicial.style.display = 'flex';
    
    // Adicionar listener para fechar ao clicar no overlay
    overlay.addEventListener('click', fecharConvite);
    
    // Adicionar listener para tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && conviteAberto) {
            fecharConvite();
        }
    });
    
    // Testar validação
    validarConfiguracao();
});

/**
 * Salvar estado do convite antes de sair
 */
window.addEventListener('beforeunload', function() {
    if (conviteAberto) {
        localStorage.setItem('conviteAberto', 'true');
    }
});

/**
 * Validação de dados
 */
function validarConfiguracao() {
    const erros = [];
    
    if (!CONFIG_EVENTO.data || isNaN(CONFIG_EVENTO.data)) {
        erros.push('Data do evento inválida');
    }
    
    if (CONFIG_EVENTO.data <= new Date().getTime()) {
        console.warn('⚠️ A data do evento deve ser no futuro. Data configurada:', new Date(CONFIG_EVENTO.data));
    }
    
    if (erros.length > 0) {
        console.error('❌ Erros na configuração:', erros);
    } else {
        console.log('✅ Configuração válida!');
    }
    
    return erros.length === 0;
}

// Validar configuração ao carregar
validarConfiguracao();

console.log('Script carregado com sucesso! ✅');