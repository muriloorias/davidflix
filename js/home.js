const starWars = localStorage.getItem("starWarsSelecionado") === "true";
const velozes = localStorage.getItem("velozesSelecionado") === "true";
const mj = localStorage.getItem("michaelJacksonSelecionado") === "true";

const adSpace = document.querySelector(".ad-space");

function mostrarAnuncio(html) {
  adSpace.innerHTML = html;
}

if (starWars) {
  mostrarAnuncio(`
    <span class="ad-label">Propaganda</span>
    <div class="ad-content">
      <h2>Uma galáxia muito, muito distante...</h2>
      <p>Reviva a saga. <strong>Star Wars: The Complete Collection</strong> — disponível agora no Disney+.</p>
      <a href="https://www.disneyplus.com" target="_blank" class="ad-btn">Assista agora</a>
    </div>
  `);
} else if (velozes) {
  mostrarAnuncio(`
    <span class="ad-label">Propaganda</span>
    <div class="ad-content">
      <h2> Velocidade. Potência. Adrenalina.</h2>
      <p>O novo <strong>Toyota GR Supra 2025</strong> chegou. Do 0 ao 100 em 3,9 segundos.</p>
      <a href="https://www.toyota.com.br" target="_blank" class="ad-btn">Ver modelo</a>
    </div>
  `);
} else if (mj) {
  mostrarAnuncio(`
    <span class="ad-label">Propaganda</span>
    <div class="ad-content">
      <h2> The King of Pop vive para sempre.</h2>
      <p>Ouça a discografia completa de <strong>Michael Jackson</strong> no Spotify. Thriller, Beat It e muito mais.</p>
      <a href="https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm" target="_blank" class="ad-btn">Ouvir agora</a>
    </div>
  `);
} else {
  mostrarAnuncio(`
    <span class="ad-label">Propaganda</span>
    <p>Nenhuma preferência detectada.</p>
  `);
}