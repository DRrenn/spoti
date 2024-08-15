const burger = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
const kamotecue = document.querySelector(".kamote");


burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  headerNav.classList.toggle("open");
  kamotecue.classList.toggle("open");
});

const header = document.querySelector(".header")
window.addEventListener("scroll", () =>{
  if ((scrollY) >= 100) {
  console.log(scrollY);
  header.classList.add("blue");
} else {
  header.classList.remove("blue");
}
});

const links = document.querySelectorAll(".footer_links_items h4");
links.forEach((link) => {
    link.addEventListener("click", () => {
        link.nextElementSibling.classList.toggle("open");
        link.querySelector("span").classList.toggle("open");
    });
    
});