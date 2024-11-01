document.getElementById("form-inscricao").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const curso = document.getElementById("curso").value;
    const idInscricao = "ID" + Math.floor(Math.random() * 100000);

    fetch("https://vestibularb-c6f2.restdb.io/rest/candidatos?max=2", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-apikey": "9c549e27cfe91b4251c8cfc0fea1fa058a163"
        },
        body: JSON.stringify({ nome, cpf, curso, idInscricao, status: "Aguardando" })
    })
    .then(response => response.json())
    .then(data => {
        alert(`Inscrição realizada! Seu ID de inscrição é: ${idInscricao}`);
    })
    .catch(error => console.error("Erro:", error));
});
