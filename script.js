let counterelement = document.querySelector(".counter");
let incrementbtnelement = document.querySelector(".incrementbtn");
let decrementbtnelement = document.querySelector(".decrementbtn");

let counter = 0;

incrementbtnelement.addEventListener("click", () => {
  counter += 1;
  counterelement.textContent = counter;
});

decrementbtnelement.addEventListener("click", () => {
  if (counter > 0) {
    counter -= 1;
    counterelement.textContent = counter;
  }
});
