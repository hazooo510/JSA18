async function getGames() {
  const res = await fetch("https://www.freetogame.com/api/games");
  const data = await res.json();

  const gameList = document.getElementById("game-list");
  let html = "";

  data.slice(0, 600).forEach(game => {
    html += `
      <div class="card" data-id="${game.id}" onclick="window.location.href='./detailsmold.html?id=${game.id}'">
        <img src="${game.thumbnail}" alt="${game.title}">
        <h3>${game.title}</h3>
        <p>${game.genre}</p>
        <button class="play-btn">Play</button>
      </div>
    `;
  });

  gameList.innerHTML = html;
}

getGames();

