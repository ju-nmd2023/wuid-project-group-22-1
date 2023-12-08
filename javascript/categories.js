let navbar = document.getElementById("categories");

let shouldStickPosition = navbar.offsetTop;

function addOrRemoveStickyClass() {
  if (window.pageYOffset >= shouldStickPosition) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = () => {
  addOrRemoveStickyClass();
};

window.onresize = () => {
  shouldStickPosition = navbar.offsetTop;
};
