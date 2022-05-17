const burger = document.querySelector(".header__burger");
const headerContent = document.querySelector(".header__content");
const clotheBurger = document.querySelector(".header__content--close");
const headerLinks = document.querySelectorAll(".header__content-link");
const header = document.querySelector(".header__top");
const arrow = document.querySelector(".header__arrow-button");

burger.addEventListener("click", () =>
  headerContent.classList.add("header__content--active")
);
clotheBurger.addEventListener("click", () =>
  headerContent.classList.remove("header__content--active")
);
headerLinks.forEach((link) =>
  link.addEventListener("click", () =>
    headerContent.classList.remove("header__content--active")
  )
);
arrow.addEventListener("click", () => {
  let windowHeight = window.innerHeight;
  window.scrollTo({
    top: windowHeight - 70,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", () => {
  let pageScrolTwo = window.pageYOffset;
  if (pageScrolTwo > header.offsetHeight) {
    header.classList.add("sticky");
    header.style.height = "70px";
  } else {
    header.classList.remove("sticky");
    header.style.height = "100px";
  }
});
