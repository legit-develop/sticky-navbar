const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");
//height of image block
console.log(bottomContainerEl.offsetTop);

//height of navbar
console.log(navbarEl.offsetHeight);
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});
