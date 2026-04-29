
function continuarEscolha() {
  let starWarsSelecionado = false;
  let velozesSelecionado = false;
  let michaelJacksonSelecionado = false;

  const escolhido = document.querySelector(
    'input[name="escolha"]:checked'
  );

  if (!escolhido) {
    alert("Selecione uma opção.");
    return;
  }

  if (escolhido.value === "Star Wars") {
    starWarsSelecionado = true;
  } 
  else if (escolhido.value === "Velozes e Furiosos") {
    velozesSelecionado = true;
  } 
  else if (escolhido.value === "Michael Jackson") {
    michaelJacksonSelecionado = true;
  }

  // salva no navegador
  localStorage.setItem("starWarsSelecionado", starWarsSelecionado);
  localStorage.setItem("velozesSelecionado", velozesSelecionado);
  localStorage.setItem("michaelJacksonSelecionado", michaelJacksonSelecionado);

  // redireciona da pagina tipodeAdd.html para home.html
  window.location.href = "home.html";
}