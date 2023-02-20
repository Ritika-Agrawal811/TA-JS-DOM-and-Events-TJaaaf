let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

let allFirstBoxes = [...box1.querySelectorAll(".box")];

allFirstBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.add("show");

    setTimeout(() => {
      box.classList.remove("show");
    }, 5000);
  });
});

box2.addEventListener("click", (event) => {
  let box = event.target;
  box.classList.add("show");

  setTimeout(() => {
    box.classList.remove("show");
  }, 5000);
});
