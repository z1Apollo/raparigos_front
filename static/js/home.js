function carregarConteudo(url, linkAtivo) {
    const container = document.getElementById("container");
    container.innerHTML = "<p>Carregando...</p>";

    fetch(url)
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;
            atualizarLinkAtivo(linkAtivo);
        })
        .catch(err => container.innerHTML = "<p>Erro ao carregar conteúdo.</p>");
}

function atualizarLinkAtivo(linkAtivo) {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
    });
    if (linkAtivo) {
        linkAtivo.classList.add("active");
    }
}

document.querySelectorAll(".nav-link[data-url]").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const url = link.getAttribute("data-url");
        carregarConteudo(url, link);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const primeiroLink = document.querySelector(".nav-link[data-url]");
    if (primeiroLink) {
        carregarConteudo(primeiroLink.getAttribute("data-url"), primeiroLink);
    }
});