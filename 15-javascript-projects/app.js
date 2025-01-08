const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const letters = "0123456789ABCDEF";
const randomColor = getRandomColor();

backgroundColor(randomColor);

function backgroundColor(randomColor) {
  color.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
}

btn.addEventListener("click", function () {
  const randomColor = getRandomColor();
  backgroundColor(randomColor);
});

function getRandomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
