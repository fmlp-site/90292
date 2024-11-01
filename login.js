document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const idInscricao = document.getElementById("id_inscricao").value;

    fetch(`https://vestibularb-c6f2.restdb.io/rest/candidatos?max=2?q={"idInscricao": "${idInscricao}"}`, {
        headers: {
            "x-apikey": "9c549e27cfe91b4251c8cfc0fea1fa058a163"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            window.location.href = "paineldocandidato.html";
        } else {
            alert("ID de inscrição inválido.");
        }
    })
    .catch(error => console.error("Erro:", error));
});
