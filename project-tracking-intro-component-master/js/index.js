const menu = document.querySelector(".menu");
const c = document.querySelector(".close");
const nav = document.querySelector(".nav-mobile");

menu.addEventListener("click", () => {
  menu.classList.add("remove");
  c.classList.toggle("open");
  nav.classList.toggle("open");
});

c.addEventListener("click", () => {
  c.classList.toggle("open");
  menu.classList.remove("remove");
  nav.classList.toggle("open");
});
