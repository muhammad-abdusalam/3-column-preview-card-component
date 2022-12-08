// ##Catch Elements
const carBoxs = document.querySelectorAll(".cars-preview .car");

let arrayOfCars = Array.from(carBoxs);

// ##Events
window.onload = function () {
  if (scrollY >= 275) {
    // Update animation delay for last card
    arrayOfCars[2].style.animationDelay = "0.3s";
  }
  arrayOfCars.forEach((car) => moveOnScroll(car));
};
window.onscroll = function () {
  arrayOfCars.forEach((car) => moveOnScroll(car));
};

// ##Functions
// Show Columns On Scroll
function moveOnScroll(car) {
  if (scrollY >= car.offsetTop - 550) {
    car.classList.add("animate");
  }
}
