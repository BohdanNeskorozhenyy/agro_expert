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

function sendEmail(name, email, number){
  var templateParams = {
     name: name,
     email: email,
     number: number
  };
  emailjs.init("t7eMCLVw9dImSHaoG");
  emailjs.send('service_bgmxqi9', 'template_z73rd1c', templateParams, 't7eMCLVw9dImSHaoG')
}
const form = document.querySelector('.form-section__form')
const footerForm = document.querySelector('.footer__form');
const inputs = form.querySelectorAll('input')
const footerInputs = footerForm.querySelectorAll('input')

form.addEventListener('submit', (e)=> {
  e.preventDefault()
  const data = {
     name: inputs[2].value || 'Невідомий клієнт',
     email: inputs[0].value || 'Невідомо',
     number: inputs[1].value
  }
  sendEmail(data.name, data.email, data.number)
  form.reset();
})
footerForm.addEventListener('submit', (e)=> {
  e.preventDefault();
  const data = {
     name: 'Невідомий клієнт',
     email:  'Невідомо',
     number: footerInputs[0].value
  }
  sendEmail(data.name, data.email, data.number)
  footerForm.reset();
})


