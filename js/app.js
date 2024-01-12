const btnMenu = document.querySelector(".icon-menu");
const nav = document.querySelector(".nav");
const btnClose = document.querySelector(".icon-close");
const subMenu = document.querySelector(".sub-menu");
const conetMenu = document.querySelector(".conect-submenu");

btnMenu.addEventListener("click", () => {
  nav.classList.remove("hidden");
  btnMenu.style.display = "none";
  btnClose.style.display = "block";
});

btnClose.addEventListener("click", () => {
  nav.classList.add("hidden");
  btnMenu.style.display = "block";
  btnClose.style.display = "none";
});

subMenu.addEventListener("click", () => {
  conetMenu.classList.toggle("hidden-conet");
  subMenu.classList.toggle("active");
});

conetMenu.addEventListener("mouseleave", () => {
  conetMenu.classList.add("hidden-conet");
  subMenu.classList.remove("active");


});
