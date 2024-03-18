const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const inputel = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ul.innerHTML += `<li>${input.value}</li>`;
  input.value = "";
  const music = new Audio("./music/sound-2.mp3");
  music.play();
});

inputel.addEventListener("input", () => {
  const music = new Audio("./music/sound-5.mp3");
  music.play();
});
