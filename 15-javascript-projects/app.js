const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const randomColor = getRandomColor();
color.textContent = randomColor;
document.body.style.backgroundColor = randomColor;

btn.addEventListener("click", function () {
  const randomColor = getRandomColor();
  console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
