function loadStatus(calback, status) {
  var xhr = new XMLHttpRequest();

  // Faz a requisição na prapria home com a chave no RequestHeader
  // de maneira assync
  xhr.open("GET", "/");
  xhr.setRequestHeader("X-Char", status, true);

  // Após a confirmação de recebimento do nosso request
  // move a tela inteira para o novo endereço recebido no response
  // da requisição
  xhr.onload = function () {
    window.location.assign(xhr.responseURL);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
      calback(xhr.status);
    }
  };

  xhr.send(null);
}

// Adiciona um evento click aos três primeiros elementos de cada classe
// e retorna uma função callback com uma promisse
document.querySelector(".alive").addEventListener("click", function (e) {
  return loadStatus(function (response) {
    console.log(response);
  }, "alive");
});

document.querySelector(".dead").addEventListener("click", function (e) {
  return loadStatus(function (response) {
    console.log(response);
  }, "dead");
});

document.querySelector(".unknown").addEventListener("click", function (e) {
  return loadStatus(function (response) {
    console.log(response);
  }, "unknown");
});
