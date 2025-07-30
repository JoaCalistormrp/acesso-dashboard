document.querySelector(".Login").addEventListener("click", function (e) {
  e.preventDefault(); // impede o envio padrão do formulário

  const usuario = document.querySelector("input[type='text']").value;
  const senha = document.querySelector("input[type='password']").value;

  fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ usuario, senha })
  })
    .then(res => res.json())
    .then(data => {
      if (data.sucesso) {
        alert("Login bem-sucedido!");
        window.location.href = ""; // redireciona
      } else {
        alert("Usuário ou senha incorretos.");
      }
    });
});
