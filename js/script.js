// Pega o(s) botao(es) de abrir modal
const botoesAbrir = document.querySelectorAll('.abrir-modal');

// Para cada botão de abrir, adicione um evento de click
botoesAbrir.forEach(botao => {
    botao.addEventListener('click', () => {

        // Pega o ID de cada um dos modais
        const modalID = botao.getAttribute('data-modal');
        
        // Pega o modal
        const modal = document.getElementById(modalID);

        // Mostra o modal
        modal.showModal(); 
    });
});

// Pega o(s) botao(es) de fechar o modal
const botoesFechar = document.querySelectorAll('.fechar-modal');

// Para cada botão de fechar, adicione um evento de click
botoesFechar.forEach(botao => {
    botao.addEventListener('click', () => {

        // Pega o ID de cada um dos modais
        const modalID = botao.getAttribute('data-modal');
        
        // Pega o modal
        const modal = document.getElementById(modalID);

        // Fecha o modal
        modal.close();
    });
});