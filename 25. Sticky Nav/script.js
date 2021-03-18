const navElement = document.querySelector(".nav");

document.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > navElement.offsetHeight + 100) {
    navElement.classList.add("active");
  } else {
    navElement.classList.remove("active");
  }
}
