document.getElementById("card").addEventListener("click", cardFunction);
function cardFunction() {
  let x = document.getElementById("card-info");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function menuFunction() {
  let x = document.getElementById("hamburger-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function overlay() {
  document.getElementById("hamburger-menu").style.display = "none";
  let x = document.getElementById("overlay");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("hamburger-menu").style.display = "block";
}
