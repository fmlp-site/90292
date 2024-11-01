// Carregar inscrições e exibir na página
function carregarInscricoes() {
    fetch("https://vestibularb-c6f2.restdb.io/rest/candidatos?max=2", {
        headers: {
            "x-apikey": "9c549e27cfe91b4251c8cfc0fea1fa058a163"
        }
    })
    .then(response => response.json())
    .then(data => {
        const lista = document.getElementById("inscricoes-lista");
        lista.innerHTML = "";

        data.forEach(inscricao => {
            const div = document.createElement("div");
            div.innerHTML = `
                <p>Nome: ${inscricao.nome}</p>
                <p>CPF: ${inscricao.cpf}</p>
                <p>Curso: ${inscricao.curso}</p>
                <p>ID de Inscrição: ${inscricao.idInscricao}</p>
                <label>Status:</label>
                <select onchange="alterarStatus('${inscricao._id}', this.value)">
                    <option value="Aguardando" ${inscricao.status === "Aguardando" ? "selected" : ""}>Aguardando</option>
                    <option value="Aprovada" ${inscricao.status === "Aprovada" ? "selected" : ""}>Aprovada</option>
                    <option value="Reprovada" ${inscricao.status === "Reprovada" ? "selected" : ""}>Reprovada</option>
                </select>
                <hr>
            `;
            lista.appendChild(div);
        });
    })
    .catch(error => console.error("Erro ao carregar inscrições:", error));
}

// Alterar o status da inscrição
function alterarStatus(id, status) {
    fetch(`https://<SEU-NOME-DO-BANCO>.restdb.io/rest/candidatos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-apikey": "<SUA-API-KEY>"
        },
        body: JSON.stringify({ status: status })
    })
    .then(response => response.json())
    .then(data => {
        alert("Status atualizado!");
    })
    .catch(error => console.error("Erro ao atualizar status:", error));
}

// Carrega as inscrições ao abrir a página
window.onload = carregarInscricoes;
