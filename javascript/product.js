// The following code was added by courtesy of Richard Viitanen
const displayImg = document.querySelector("#sticky-img");
const slideImages = document.querySelectorAll(".slide img");

function swapImage() {
  const imgSource = this.getAttribute("src");

  displayImg.style.transition = "opacity 0.3s ease";
  displayImg.style.opacity = 0;

  // The following 2 lines of code was adapted from https://www.w3schools.com/jsref/met_win_settimeout.asp Accessed: 2023-12-05
  setTimeout(() => {
    displayImg.setAttribute("src", imgSource);
    displayImg.style.opacity = 1;
  }, 300);
}

// The following 3 lines of code was adapted from https://www.w3schools.com/jsref/jsref_foreach.asp Accessed: 2023-12-05
slideImages.forEach((img) => {
  img.addEventListener("click", swapImage);
});
