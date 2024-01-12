const btnMenu = document.querySelector(".icon-menu");
const nav = document.querySelector(".nav");
const btnClose = document.querySelector(".icon-close");
const subMenu= document.querySelector(".sub-menu");

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
  
});