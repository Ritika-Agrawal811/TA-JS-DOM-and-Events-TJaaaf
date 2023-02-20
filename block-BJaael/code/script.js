let container = document.getElementById("container");

for (let i = 0; i < 500; i++) {
  let box = document.createElement("div");
  box.className = "box";

  box.textContent = getRandomNumber();
  container.append(box);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 500);
}

function setBackgroundColor() {
  return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
}

let boxesArray = [...document.querySelectorAll(".box")];

container.addEventListener("mouseover", () => {
  for (let box of boxesArray) {
    box.textContent = getRandomNumber();
    box.style.backgroundColor = setBackgroundColor();
  }
});
