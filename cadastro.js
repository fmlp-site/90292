document.getElementById("form-cadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const idInscricao = "ID" + Math.floor(Math.random() * 100000); // Gera um ID único

    fetch("1https://vestibularb-c6f2.restdb.io/rest/candidatos?max=2", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-apikey": "9c549e27cfe91b4251c8cfc0fea1fa058a163"
        },
        body: JSON.stringify({ nome, cpf, idInscricao, status: "Aguardando" })
    })
    .then(response => response.json())
    .then(data => {
        alert(`Cadastro realizado! Seu ID de inscrição é: ${idInscricao}`);
        window.location.href = "login.html"; // Redireciona para a página de login
    })
    .catch(error => console.error("Erro:", error));
});
