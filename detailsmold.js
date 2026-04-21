const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function getGameDetails() {
  const res = await fetch(`https://www.freetogame.com/api/game?id=${id}`);
  const data = await res.json();

  document.getElementById("game-title").innerText = data.title;
  document.getElementById("genre").innerText = data.genre;
  document.getElementById("platform").innerText = data.platform;
  document.getElementById("publisher").innerText = data.publisher;
  document.getElementById("release").innerText = data.release_date;
  document.getElementById("rating").innerText = data.rating;
  document.getElementById("description").innerText = data.description;
  document.getElementById("game-image").src = data.thumbnail;
  document.getElementById("game-image-banner").src = data.thumbnail;

  const gallery = document.querySelector(".images");
  data.screenshots.forEach(img => {
    const imgElement = document.createElement("img");
    imgElement.src = img;
    gallery.appendChild(imgElement);
  });

  const downloadBtn = document.querySelector(".download-btn");
  downloadBtn.href = data.game_url;
}

getGameDetails();
