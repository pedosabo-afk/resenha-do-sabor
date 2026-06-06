# 🎉 Resenha do Sabor - Convite Online

Um site responsivo e interativo de convite online criado com **HTML, CSS e JavaScript**. Ideal para festas, resenhas, eventos e encontros.

## ✨ Características

✅ **Interface Moderna** - Design escuro com efeitos neon e gradientes  
✅ **Totalmente Responsivo** - Funciona em desktop, tablet e mobile  
✅ **Animações Suaves** - Transições e efeitos de entrada/saída  
✅ **Contagem Regressiva** - Mostra tempo faltante até o evento  
✅ **Vídeo do YouTube** - Atmosfera musical integrada  
✅ **Integração WhatsApp** - Botão para confirmar presença  
✅ **Link do Mapa** - Acesso direto à localização via Google Maps  
✅ **GitHub Pages Ready** - Deploy automático incluído  
✅ **Sem Dependências** - HTML, CSS e JavaScript puros  

---

## 🚀 Funcionalidades Principais

### 1. Tela Inicial Animada
- Botão principal com efeito de pulso
- Mensagem de boas-vindas
- Transição suave para o convite

### 2. Card do Convite
- Informações do evento (data, hora, local)
- Design com efeito neon e vidro fosco
- Botão para fechar (ESC também funciona)

### 3. Contagem Regressiva
- Mostra Dias : Horas : Minutos : Segundos
- Atualiza em tempo real
- Para quando o evento chega

### 4. Vídeo do YouTube
- Atmosfera musical integrada
- Começa nos 49 segundos (conforme configurado)
- Controles nativos de player

### 5. Botões de Ação
- **Ver no Mapa**: Abre Google Maps com a localização
- **Confirmar Presença**: Abre WhatsApp com mensagem pré-preenchida

---

## 📋 Estrutura do Projeto

```
resenha-do-sabor/
├── index.html          # Estrutura HTML
├── styles.css          # Estilos e animações
├── script.js           # Lógica e interatividade
└── README.md           # Este arquivo
```

---

## 🎨 Personalização

### Configurar Número do WhatsApp

Edite em `script.js`:

```javascript
const CONFIG_EVENTO = {
    whatsappNumber: '5585987654321', // Código do país + DDD + número
    // ...
};
```

**Formato**: `55` (Brasil) + `85` (DDD) + `987654321` (número)

### Mudar Cores

Edite o CSS em `styles.css`:

```css
:root {
    --neon-pink: #ff006e;
    --neon-cyan: #00f5ff;
    /* ... outras cores */
}
```

### Adicionar Mais Informações

Edite o HTML em `index.html`:

```html
<div class="info-item">
    <span class="icone">🎵</span>
    <div>
        <p class="label">Música</p>
        <p class="valor">DJ Confirmado</p>
    </div>
</div>
```

---

## 📱 Responsividade

- **Desktop** (1024px+): Layout otimizado com espaçamento generoso
- **Tablet** (768px - 1023px): Ajustes para telas médias
- **Mobile** (480px - 767px): Fonte menor, spacing compacto
- **Celular Pequeno** (até 480px): Otimizado para telas muito pequenas

---

## 🔧 Como Usar

### 1. Clone o repositório
```bash
git clone https://github.com/pedosabo-afk/resenha-do-sabor.git
```

### 2. Abra no navegador
- Clique duplo em `index.html`, ou
- Use um servidor local:
  ```bash
  python -m http.server 8000
  ```

### 3. Deploy no GitHub Pages
- Faça push para o repositório
- Vá em Settings > Pages
- Selecione `main` como branch
- Acesse: `https://pedosabo-afk.github.io/resenha-do-sabor`

---

## 📲 Compartilhamento

Compartilhe o link em:
- **WhatsApp**: Convites diretos
- **Instagram**: Stories e bio
- **Email**: Convite digital
- **Redes Sociais**: Posts

---

## 🐛 Resolução de Problemas

### Contagem não atualiza
- Verifique se a data está no formato correto: `YYYY-MM-DDTHH:mm:ss`
- Certifique-se de que a data é no futuro

### WhatsApp não abre
- Verifique o número com código do país: `5585987654321`

### Vídeo não aparece
- Verifique conexão com internet
- Teste o link do YouTube diretamente

---

## 📝 Licença

MIT License - Você é livre para usar, modificar e distribuir.

---

## 🎊 Bom Evento!

Esperamos que seu convite online seja um sucesso! 🥳