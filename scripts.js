// Variáveis globais
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-btn");
const playButton = document.getElementById("play-btn");

// Função que abre o modal e exibe o vídeo
playButton.addEventListener("click", function() {
    modal.style.display = "flex";  // Exibe o modal
});

// Função que fecha o modal
closeButton.addEventListener("click", function() {
    modal.style.display = "none";  // Fecha o modal
});

// Fechar o modal ao clicar fora da janela
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";  // Fecha o modal
    }
};
