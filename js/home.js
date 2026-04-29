const starWars = localStorage.getItem("starWarsSelecionado") === "true";
const velozes = localStorage.getItem("velozesSelecionado") === "true";
const mj = localStorage.getItem("michaelJacksonSelecionado") === "true";

if (starWars) {
  alert("Usuário escolheu Star Wars");
}

if (velozes) {
  alert("Usuário escolheu Velozes e Furiosos");
}

if (mj) {
  alert("Usuário escolheu Michael Jackson");
}