document.getElementById("form-login").addEventListener("submit", function(event) {
    event.preventDefault();

    const idInscricao = document.getElementById("idInscricao").value;

    fetch(`https://vestibularb-c6f2.restdb.io/rest/candidatos?max=2?q={"idInscricao": "${idInscricao}"}`, {
        headers: {
            "Content-Type": "application/json",
            "x-apikey": "9c549e27cfe91b4251c8cfc0fea1fa058a163"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            alert("Login realizado com sucesso!");
            localStorage.setItem("candidatoId", data[0]._id); // Salva o ID do candidato para uso futuro
            window.location.href = "paineldocandidato.html"; // Redireciona para o painel do candidato
        } else {
            alert("ID de inscrição inválido. Tente novamente.");
        }
    })
    .catch(error => console.error("Erro:", error));
});
