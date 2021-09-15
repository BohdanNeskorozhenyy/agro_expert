(function () {
   const burgerItem = document.querySelector('.burger');
   const menu = document.querySelector('.header__content');
   const menuClose = document.querySelector('.header__content--close')
   const linkClose = document.querySelector('.header__content-link1')
   const linkClose2 = document.querySelector('.header__content-link2')
   const linkClose3 = document.querySelector('.header__content-link3')

   burgerItem.addEventListener('click', () => {
     menu.classList.add("header__content--active");
   });
   menuClose.addEventListener('click', () => {
      menu.classList.remove("header__content--active");
   });
   linkClose.addEventListener('click', () => {
      menu.classList.remove("header__content--active");
      videoClose.classList.remove("video__close");
   });
   linkClose2.addEventListener('click', () => {
      menu.classList.remove("header__content--active");
      videoClose.classList.remove("video__close");
   });
   linkClose3.addEventListener('click', () => {
      menu.classList.remove("header__content--active");
      videoClose.classList.remove("video__close");
   });
}());



   (function stickyBlock(id = "header") {
      const block = document.getElementById(id),
         sticky = block.getBoundingClientRect().height;

      window.addEventListener('scroll', () => {
      stickyClass();
      });

   function stickyClass() {
      const pageTop = window.pageYOffset;

      if (pageTop > sticky) {
            block.classList.add("sticky");
      } else {
            block.classList.remove("sticky"); 
         }
         }
   })()

// Выберем кнопку и форму
var hiddenElement = document.getElementById("form-section-scroll");
var btn = document.querySelector('.arrow_button');

function handleButtonClick() {
   hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}

btn.addEventListener('click', handleButtonClick);
   

