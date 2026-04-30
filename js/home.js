const starWars = localStorage.getItem("starWarsSelecionado") === "true";
const velozes = localStorage.getItem("velozesSelecionado") === "true";
const mj = localStorage.getItem("michaelJacksonSelecionado") === "true";

if (starWars) {
  alert("Obrigado por responder isso nos ajuda a descobrir sobre o que você gosta");
}

if (velozes) {
  alert("Obrigado por responder isso nos ajuda a descobrir sobre o que você gosta");
}

if (mj) {
  alert("Obrigado por responder isso nos ajuda a descobrir sobre o que você gosta");
}