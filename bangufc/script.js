document.addEventListener("DOMContentLoaded", function () {
    console.log("Site Atlético Bangu carregado!");

    // Navegação Suave
    document.querySelectorAll("nav ul li a").forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Modal de Imagem
    const modal = document.getElementById("modal-imagem");
    const imagemModal = document.getElementById("imagem-modal");
    const fecharModal = document.querySelector(".fechar-modal");

    document.querySelectorAll("#calendario table tr[data-imagem]").forEach((linha) => {
        linha.addEventListener("click", function () {
            imagemModal.src = this.dataset.imagem;
            modal.style.display = "block";
        });
    });

    fecharModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});