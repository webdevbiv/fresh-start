const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const letters = "0123456789ABCDEF";

initializeBackground();

function initializeBackground() {
  const initialColor = getRandomColor();
  setBackgroundColor(initialColor);
}

function setBackgroundColor(colorValue) {
  if (color) {
    color.textContent = colorValue;
  }
  document.body.style.backgroundColor = colorValue;
}

btn?.addEventListener("click", function () {
  const newColor = getRandomColor();
  setBackgroundColor(newColor);
});

function getRandomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
