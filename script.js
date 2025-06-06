function getTokenFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("token");
}

async function enviarCodigo() {
  const codigo = document.getElementById("codigo").value;
  const token = getTokenFromURL();

  if (!codigo || !token) {
    document.getElementById("status").textContent = "Código ou token ausente.";
    return;
  }

  const resposta = await fetch("https://script.google.com/macros/s/AKfycbx7KhkI_KPFlPVkVTbU5OqbXHYBtv7qX8QhGU2JkPBLEyXMqAJcmOCu8TUmabG6u1tR/exec", {
    method: "POST",
    body: JSON.stringify({ codigo, token }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const resultado = await resposta.json();
  document.getElementById("status").textContent = resultado.mensagem;
}
