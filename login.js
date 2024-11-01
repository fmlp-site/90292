document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const idInscricao = document.getElementById("id_inscricao").value;

    fetch(`https://<SEU-NOME-DO-BANCO>.restdb.io/rest/candidatos?q={"idInscricao": "${idInscricao}"}`, {
        headers: {
            "x-apikey": "<SUA-API-KEY>"
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
