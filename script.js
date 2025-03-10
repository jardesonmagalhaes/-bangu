document.addEventListener("DOMContentLoaded", function () {
    console.log("Site Atlético Bangu carregado!");

    // Navegação Suave
    document.querySelectorAll("nav ul li a").forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Modal de Detalhes da Partida
    const modalPartida = document.getElementById("modal-partida");
    const modalTituloPartida = document.getElementById("modal-titulo-partida");
    const modalGols = document.getElementById("modal-gols");
    const modalAssistencias = document.getElementById("modal-assistencias");
    const modalResumo = document.getElementById("modal-resumo");
    const fecharModalPartida = modalPartida.querySelector(".fechar-modal");

    document.querySelectorAll("#calendario table tr[data-detalhes]").forEach((linha) => {
        linha.addEventListener("click", function () {
            const detalhes = JSON.parse(this.dataset.detalhes);
            modalTituloPartida.textContent = `${this.children[1].textContent} - ${this.children[2].textContent}`;
            modalGols.innerHTML = detalhes.gols.map(gol => `<li>${gol}</li>`).join("");
            modalAssistencias.innerHTML = detalhes.assistencias.map(assistencia => `<li>${assistencia}</li>`).join("");
            modalResumo.textContent = detalhes.resumo;
            modalPartida.style.display = "block";
        });
    });

    fecharModalPartida.addEventListener("click", function () {
        modalPartida.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modalPartida) {
            modalPartida.style.display = "none";
        }
    });

    // Inicialização do Modal da Partida (Oculta o Modal no Carregamento)
    modalPartida.style.display = "none";
});