let firstBox = document.querySelector(".first");
let secondBox = document.querySelector(".second");

firstBox.addEventListener("click", setBackgroundColor);
secondBox.addEventListener("mousemove", setBackgroundColor);

function setBackgroundColor(event) {
  let bgColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
  event.target.style.backgroundColor = bgColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}
