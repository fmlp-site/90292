document.getElementById("form-inscricao").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const curso = document.getElementById("curso").value;
    const idInscricao = "ID" + Math.floor(Math.random() * 100000);

    fetch("https://<SEU-NOME-DO-BANCO>.restdb.io/rest/candidatos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-apikey": "<SUA-API-KEY>"
        },
        body: JSON.stringify({ nome, cpf, curso, idInscricao, status: "Aguardando" })
    })
    .then(response => response.json())
    .then(data => {
        alert(`Inscrição realizada! Seu ID de inscrição é: ${idInscricao}`);
    })
    .catch(error => console.error("Erro:", error));
});
