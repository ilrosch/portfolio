let burger = document.querySelector("#burger");
let burgerLine = document.querySelector("#burgerLine");
let header = document.querySelector("#header");
let bodyLock = document.querySelector("body");

burger.addEventListener("click", () => {
  header.classList.toggle("header-active");
  burgerLine.classList.toggle("burger-active");
  bodyLock.classList.toggle("body-lock");
});

let links = document.querySelectorAll(".header-menu__block--link");
for (let index = 0; index < links.length; index++) {
  links[index].addEventListener("click", () => {
    burgerLine.classList.remove("burger-active");
    header.classList.remove("header-active");
    bodyLock.classList.remove("body-lock");
  });
}

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;
  if (window.innerWidth >= 300) {
    document.querySelectorAll("section").forEach((el, i) => {
      if (el.offsetTop - 250 <= scrollDistance) {
        document.querySelectorAll(".header-menu__block--link").forEach((el) => {
          if (el.classList.contains("active-menu")) {
            el.classList.remove("active-menu");
          }
        });

        document.querySelectorAll(".header-menu__block--li")[i].querySelector("a").classList.add("active-menu");
      }
    });
  }
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  centerInsufficientSlides: true,
  centeredSlides: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

AOS.init();
