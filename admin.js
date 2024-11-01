document.getElementById("cadastro-admin-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario-cadastro").value;
    const senha = document.getElementById("senha-cadastro").value;

    fetch("https://<SEU-NOME-DO-BANCO>.restdb.io/rest/administradores", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-apikey": "<SUA-API-KEY>"
        },
        body: JSON.stringify({ usuario, senha })
    })
    .then(response => response.json())
    .then(data => alert("Administrador cadastrado com sucesso!"))
    .catch(error => console.error("Erro:", error));
});

document.getElementById("login-admin-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    fetch(`https://<SEU-NOME-DO-BANCO>.restdb.io/rest/administradores?q={"usuario": "${usuario}", "senha": "${senha}"}`, {
        headers: {
            "x-apikey": "<SUA-API-KEY>"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            window.location.href = "paineldoadministrador.html";
        } else {
            alert("Usuário ou senha inválidos.");
        }
    })
    .catch(error => console.error("Erro:", error));
});
